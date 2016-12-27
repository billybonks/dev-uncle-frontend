import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model(params){
    return this.store.query('pullRequest',{repo_id:this.paramsFor('repo').repo_id})
    // return this.get('ajax').request(`api/prs?repo_id=${this.paramsFor('repo').repo_id}`).then((results) => {
    //   return results;
    // });
  },

  setupController(controller, model){
    controller.set('model', model);
    controller.set('repoId', this.paramsFor('repo').repo_id);
  }
});
