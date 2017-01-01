import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.query('pullRequest',{repo_id:this.paramsFor('repo').repo_id})
  },

  setupController(controller, model){
    controller.set('model', model);

    controller.set('repo', this.store.findRecord('repo', this.paramsFor('repo').repo_id));
  }
});
