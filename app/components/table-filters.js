import Component from 'ember-component';
import service from 'ember-service/inject';

export default Component.extend({
  newFilter: false,
  store: service(),
  actions:{
    cancelFilter() {
      this.set('newFilter', null);
    },
    createFilter() {
      let filter = this.get('store').createRecord('filter');
      filter.set('name', 'Filter')
      this.set('newFilter', filter);
    },
    filterModified(){
    }
  }
});
