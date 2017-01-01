import Ember from 'ember';
import service from 'ember-service/inject';
export default Ember.Route.extend({
  ajax: service(),
  model(){
    return this.get('store').findAll('repo');
  }
});
