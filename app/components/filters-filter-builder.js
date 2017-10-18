import Component from 'ember-component';
import computed from 'ember-computed-decorators';

export default Component.extend({
  @computed('selectedFilter')
  filterTypeHash(){
    return this.get('filterTypes').reduce( (acc, filterType) => {
      acc[filterType.id] = filterType;
      return acc;
    }, {});
  },

  @computed('selectedFilter')
  filters(){
    let filterHash = this.get('filterHash');
    let existingIds = Object.keys(this.get('filterHash'));
    let filterTypeHash = this.get('filterTypeHash');
    return existingIds.map( (id) => {
      let filter = Object.assign({}, filterTypeHash[id]);
      filter.value = filterHash[id];
      return filter;
    });
  },

  @computed('filters.length')
  filteredFilterTypes(){
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
  },

  actions: {
    deleteFilter(filter){
      this.set('filters', this.get('filters').rejectBy('id',filter.id));
      delete this.get('filterHash')[filter.id];
    },
    filterSelected(filter){
      this.get('filters').pushObject(filter);
    },
    filterUpdated(filter, value){
      this.get('filterHash')[filter.id] = value;
    }
  }
});
