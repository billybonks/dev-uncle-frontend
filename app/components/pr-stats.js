import Component from 'ember-component';
import computed from 'ember-computed';
import Ember from 'ember';
import Table from 'ember-light-table';


export default Component.extend({
  states: Ember.inject.service(),
  sortBy:'updated_at',
  direction: false,
  init(){
    this._super(...arguments);
    this.set('table', new Table(this.get('columns')))
  },
  label:computed('labels', function(){
    return this.get('states')[this.get('name')](this.get('labels'));
  }),
  filteredPullRequests:computed('pullRequests', 'label', 'sortBy', 'direction', function () {
    console.log('calculate')
    if(this.get('label')){
      let prs = this.get('pullRequests').filter( pr => {
        return pr.labels.findBy('id', parseInt(this.get('label').online_id))
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
      valuePath: 'title',
      sortable: false
    }, {
      label: 'Owner',
      valuePath: 'owner',
      width:'10%'
    },{
      label: 'Last Active',
      valuePath: 'updated_at',
      width:'12%',
      cellComponent: 'days-since',
    }, {
      label: 'Age',
      valuePath: 'created_at',
      width:'10%',
      cellComponent: 'days-since'
    }]
  }).readOnly(),
  actions:{
    onColumnClick(column){
      console.log('clcikasda');
      if(column.get('sortable')){
        this.set('sortBy',column.get('valuePath'));
        this.set('direction', column.get('ascending'));
      }
    }
  }
})
