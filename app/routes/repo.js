import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model(params){
    return this.get('ajax').request(`api/prs?repo_id=${params.repo_id}`).then((results) => {
      return results;
    });
  },

  setupController(controller, model){
    controller.set('model', model.pull_requests);
    controller.set('labels', model.labels);
    controller.set('hook', model.hook);
  }
});
