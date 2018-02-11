import Component from '@ember/component';
import { computed, action } from 'ember-decorators/object';

export default class FiltersFilterBuilder extends Component {

  @action
  deleteFilter(filter){
    this.set('filters', this.get('filters').rejectBy('id',filter.id));
    delete this.get('filterHash')[filter.id];
  }

  @action
  filterSelected(filter){
    this.get('filters').pushObject(filter);
  }

  @action
  filterUpdated(filter, value){
    this.get('filterHash')[filter.id] = value;
  }

  @computed('selectedFilter')
  get filterTypeHash(){
    return this.get('filterTypes').reduce( (acc, filterType) => {
      acc[filterType.id] = filterType;
      return acc;
    }, {});
  }

  @computed('selectedFilter')
  get filters(){
    let filterHash = this.get('filterHash');
    let existingIds = Object.keys(this.get('filterHash'));
    let filterTypeHash = this.get('filterTypeHash');
    return existingIds.map( (id) => {
      let filter = Object.assign({}, filterTypeHash[id]);
      filter.value = filterHash[id];
      return filter;
    });
  }

  @computed('filters.length')
  get filteredFilterTypes(){
    let filters = this.get('filters');
    let filterTypes = this.get('filterTypes');

    if(filters.length === filterTypes.length){
      return [];
    }
    return filterTypes.filter( (filterType) => {
      if(!filters.length){
        return true;
      }
      return filters.some( (filter) => {
        return !(filter.title === filterType.title);
      });
    });
  }

}
