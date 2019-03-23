import Component from '@ember/component';
import { computed } from '@ember-decorators/object';

export default class FiltersFilterBuilder extends Component {
  classNames = ['filter-builder']


  @computed('selectedFilter.filters')
  get filteredFilterTypes() {
    const filters =new Set(Object.keys(this.get('selectedFilter.filters')));
    const filterTypes = new Set(Object.keys(this.get('filterTypes')));
    if (filters.size === filterTypes.size) {
      return [];
    }
    const difference = new Set([...filterTypes].filter(x => !filters.has(x)));
    return [...difference].map(key => this.get('filterTypes')[key]);
  }
}
