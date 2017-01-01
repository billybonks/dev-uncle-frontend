import Component from 'ember-component';
import computed from 'ember-computed';
import Table from 'ember-light-table';
import service from 'ember-service/inject';

export default Component.extend({
  store: service(),
  sortBy:'updated_at',
  direction: false,
  init(){
    this._super(...arguments);
    this.set('table', new Table(this.get('columns'), this.get('model'), {enableSync: true}))
  },
  columns: computed(function() {
    return [{
      label: 'Username',
      valuePath: 'githubUser',
    }, {
      label: 'Access',
      valuePath: 'access',
      ortable: false
    }]
  }).readOnly(),
  actions:{
    onColumnClick(column){
      if(column.get('sortable')){
        this.set('sortBy',column.get('valuePath'));
        this.set('direction', column.get('ascending'));
      }
    },
    addMember(){
      let newMember = this.get('store').createRecord('repoMember',{
        githubUser:this.get('newMember'),
        access:true,
        repo:this.get('repo')
      });
      newMember.save();
    }
  }
});
