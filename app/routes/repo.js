import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.get('store').find('repo',params.repo_id);
  },
  afterModel(repo){
    if(!repo.get('labels.length')){
      this.get('store').query('label',{repo_id:repo.get('id')}).then(function(){
        console.log('loadedLabels');
      })
    }
  },
  actions: {
    didTransition: function() {
      //this.transitionTo('repo.stats')
    }
  }
});
