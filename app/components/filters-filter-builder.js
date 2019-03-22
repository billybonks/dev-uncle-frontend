import Component from '@ember/component';
import { computed } from '@ember-decorators/object';

export default class FiltersFilterBuilder extends Component {
  classNames = ['filter-builder']


  @computed('selectedFilter.filters')
  get filteredFilterTypes(){
    let filters =new Set(Object.keys(this.get('selectedFilter.filters')));
    let filterTypes = new Set(Object.keys(this.get('filterTypes')));
    if (filters.size === filterTypes.size){
      return [];
    }
    let difference = new Set([...filterTypes].filter(x => !filters.has(x)));
    return [...difference].map((key) => {
      return this.get('filterTypes')[key];
    });
  }

}
