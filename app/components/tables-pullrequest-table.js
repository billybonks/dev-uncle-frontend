import Component from 'ember-component';
import { computed, readOnly } from 'ember-decorators/object';
import service from 'ember-service/inject';
import Table from 'ember-light-table';
import moment from 'moment';
import _ from 'underscore';

export default Component.extend({
  sortBy:'updated_at',
  direction: false,
  store: service(),

  init(){
    this._super(...arguments);
    this.set('table', new Table(this.get('columns')));
  },

  @computed('labels')
  filtersTypes(){
    return [{
        id: 'age',
        title: 'Last Modified',
        component: 'filters-editors-age-filter'
      },
      {
        id: 'labels',
        title: 'Active Labels',
        component: 'filters-editors-label-picker',
        model: this.get('labels')
    }];
  },

  @computed
  activeFilter:{
    get(){
      if(this.get('filters.firstObject')){
        this.set('filters.firstObject.isActive', true);
        return this.get('filters.firstObject');
      }
    },
    set(filter){
      if(this.get('activeFilter.id') == filter.get('id')){
        return filter;
      }
      this.set('activeFilter.isEditing', false);
      this.set('activeFilter.isActive', false);
      filter.set('isActive', true);
      return filter;
    }
  },

  @computed('pullRequests',  'activeFilter.filters')
  filteredPullRequests(){
    let labelFilters = this.get('activeFilter.filters.labels');
    let pullRequests = this.get('pullRequests');
    if(labelFilters){
      pullRequests = this.get('pullRequests').filter( (pullRequest) => {
        let labelIds = pullRequest.get('labels').map( (label) => {
          return label.get('id');
        });
        if(_.intersection(labelIds, labelFilters).length){
          return true;
        }
      });
    }
    let ageFilter = parseInt(this.get('activeFilter.filters.age'));
    if(ageFilter){
      return pullRequests.filter( (pullRequest) => {
        return moment().diff(pullRequest.get('updatedAt'),'days') > ageFilter;
      });
    } else {
      return pullRequests;
    }

  },

  @computed('filteredPullRequests.@each.id', 'sortBy', 'direction')
  sortedPullRequests() {
    let prs = this.get('filteredPullRequests').sortBy(this.get('sortBy'));
    if(this.get('direction')){
      prs = prs.reverse();
    }
    this.get('table').setRows(prs);
    return prs;
  },

  @readOnly
  @computed
  columns() {
    return [{
      label: 'Title',
      sortable: false,
      valuePath: 'linkInfo',
      cellComponent:'columns/pr-title',
      width:'53%',
    }, {
      label: 'Owner',
      valuePath: 'owner',
      width:'22%'
    },{
      label: 'Last Active',
      valuePath: 'updatedAt',
      width:'15%',
      cellComponent: 'days-since',
    }, {
      label: 'Age',
      valuePath: 'createdAt',
      width:'10%',
      cellComponent: 'days-since'
    }];
  },

  actions:{
    selectedFilter(filter){
      this.set('activeFilter', filter);
    },
    createFilter(){
      let filter = this.get('store').createRecord('filter');
      filter.set('name', 'Filter');
      filter.set('repo', this.get('repo'));
      return filter;
    },
    onColumnClick(column){
      if(column.get('sortable')){
        this.set('sortBy',column.get('valuePath'));
        this.set('direction', column.get('ascending'));
      }
    }
  }
});
