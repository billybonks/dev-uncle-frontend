import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  labels: Ember.inject.service(),
  model(params){
    this.set('labels.repoId', params.repo_id)
    this.get('labels.loadLabels').perform();
    return this.get('store').find('repo',params.repo_id);
  },
  actions: {
    didTransition: function() {
      //this.transitionTo('repo.stats')
    }
  }
});
