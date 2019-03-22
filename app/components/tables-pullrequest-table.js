import Component from '@ember/component';
import { computed, action } from '@ember-decorators/object';
import { service } from '@ember-decorators/service';
import dayjs from 'dayjs';

export default class PullRequestTable extends Component {
  @service store

  columns = [
    { name: 'Title', valuePath: 'linkInfo', cellComponent: 'columns-pr-title' },
    { name: 'Owner', valuePath: 'owner' },
    { name: 'Last Active', valuePath: 'updatedAt', cellComponent: 'days-since' },
    { name: 'Age', valuePath: 'createdAt', cellComponent: 'days-since' },
  ]

  sorts = [
    {
      valuePath: 'owner',
      isAscending: false,
    },
  ]

  @action
  selectedFilter(filter) {
    this.set('activeFilter', filter);
  }

  @action
  createFilter() {
    const filter = this.get('store').createRecord('filter');
    filter.set('name', 'Filter');
    filter.set('repo', this.get('repo'));
    return filter;
  }

  @action
  saveFilter(filter) {
    return filter.save();
  }

  @action
  onColumnClick(column) {
    if (column.get('sortable')) {
      this.set('sortBy', column.get('valuePath'));
      this.set('direction', column.get('ascending'));
    }
  }

  @computed
  get activeFilter() {
    if (this.get('filters.firstObject')) {
      this.set('filters.firstObject.isActive', true);
      return this.get('filters.firstObject');
    }
    return null;
  }

  set activeFilter(filter) {
    if (this.get('activeFilter.id') == filter.get('id')) {
      return filter;
    }
    this.set('activeFilter.isEditing', false);
    this.set('activeFilter.isActive', false);
    filter.set('isActive', true);
    return filter;
  }

  @computed('pullRequests.[]', 'activeFilter.filters')
  get filteredPullRequests() {
    const labelFilters = this.get('activeFilter.filters.labels');
    let pullRequests = this.get('pullRequests');
    if (labelFilters && labelFilters.length) {
      pullRequests = this.get('pullRequests').filter((pullRequest) => {
        const labelIds = pullRequest.get('labels').map((label) => {
          return label.get('id');
        });
        const labelIdsSet = new Set(labelIds);
        const labelFiltersSet = new Set(labelFilters);
        const intersection = new Set([...labelIdsSet].filter(x => labelFiltersSet.has(x)));
        if (intersection.size) {
          return true;
        }
      });
    }
    const ageFilter = parseInt(this.get('activeFilter.filters.age'));
    if (ageFilter) {
      return pullRequests.filter((pullRequest) => {
        return dayjs().diff(pullRequest.get('updatedAt'), 'day')> ageFilter;
      });
    } else {
      return pullRequests;
    }
  }

  @computed('filteredPullRequests.@each.id', 'sortBy', 'direction')
  get sortedPullRequests() {
    let prs = this.get('filteredPullRequests').sortBy(this.get('sortBy'));
    if (this.get('direction')) {
      prs = prs.reverse();
    }
    this.get('table').setRows(prs);
    return prs;
  }
}
