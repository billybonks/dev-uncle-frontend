import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model(params){

    return this.get('ajax').request(`api/prs?repo_id=${this.paramsFor('repo').repo_id}`).then((results) => {
      return results;
    });
  },

  setupController(controller, model){
    controller.set('model', model.pull_requests);
    controller.set('hook', model.hook);
  }
});
