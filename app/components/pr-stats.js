import Component from 'ember-component';
import computed from 'ember-computed';
import Table from 'ember-light-table';
import service from 'ember-service/inject';

export default Component.extend({
  states: service(),
  sortBy:'updated_at',
  direction: false,
  init(){
    this._super(...arguments);
    this.set('table', new Table(this.get('columns')))
  },
  label:computed('labels', function(){
    return this.get('states').findLabel(this.get('state.id'),this.get('labels'));
  }),
  filteredPullRequests:computed('pullRequests', 'label', 'sortBy', 'direction', function () {
    if(this.get('label')){
      let prs = this.get('pullRequests').filter( pr => {
        return pr.get('labels').findBy('id', this.get('label.online_id'))
      }).sortBy(this.get('sortBy'))
      if(this.get('direction')){
        prs = prs.reverse();
      }
      this.get('table').setRows(prs);
      return prs;
    } else {
      return [];
    }
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
    }]
  }).readOnly(),
  actions:{
    onColumnClick(column){
      if(column.get('sortable')){
        this.set('sortBy',column.get('valuePath'));
        this.set('direction', column.get('ascending'));
      }
    }
  }
})
