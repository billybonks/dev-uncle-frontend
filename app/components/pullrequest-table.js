import Component from 'ember-component';
import computed from 'ember-computed';
import Table from 'ember-light-table';

export default Component.extend({
  sortBy:'updated_at',
  direction: false,
  newFilter: false,
  init(){
    this._super(...arguments);
    this.set('table', new Table(this.get('columns')));
  },
  filteredPullRequests:computed('pullRequests', 'sortBy', 'direction', function () {
    let prs = this.get('pullRequests').sortBy(this.get('sortBy'));
    if(this.get('direction')){
      prs = prs.reverse();
    }
    this.get('table').setRows(prs);
    return prs;
  }),
  columns: computed(function() {
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
  }).readOnly(),
  actions:{
    cancelFilter() {
      this.set('newFilter', false);
    },
    createFilter() {
      this.set('newFilter', true);
    },
    filterModified(){
    },
    labelToggled(label){
      label.set('active', !label.get('active'));
    },
    onColumnClick(column){
      if(column.get('sortable')){
        this.set('sortBy',column.get('valuePath'));
        this.set('direction', column.get('ascending'));
      }
    }
  }
});
