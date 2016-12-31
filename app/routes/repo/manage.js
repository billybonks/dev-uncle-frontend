import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model(params){
    return this.store.findRecord('repo', this.paramsFor('repo').repo_id);
  },
  setupController(controller, model){
    controller.set('model', model);
    controller.set('repo', model);
  }
});
