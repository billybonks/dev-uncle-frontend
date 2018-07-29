import Component from '@ember/component';
import { action } from '@ember-decorators/object';

export default class FilterHeader extends Component {
    @action
    filterUpdated(filter, key, newValue){
      filter.filters[key] = newValue;
    }

    @action
    deleteFilter(filter, filterTemplate){
      delete filter.filters[filterTemplate.id];
      let newFilters = Object.assign({}, this.activeFilter.filters);
      this.activeFilter.set('filters', newFilters);
    }

    @action
    filterAdded(activeFilter, filter){
      let newFilters = Object.assign({}, this.activeFilter.filters, {[filter.id]: null});
      this.activeFilter.set('filters', newFilters );
    }
}
