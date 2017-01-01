import Ember from 'ember';
import service from 'ember-service/inject';

export default Ember.Route.extend({
  ajax: service(),
  model(params){
    return this.store.findRecord('repo', this.paramsFor('repo').repo_id);
  },
  setupController(controller, model){
    controller.set('model', model);
    controller.set('repo', model);
  }
});
