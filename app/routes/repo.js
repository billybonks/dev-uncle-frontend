import Ember from 'ember';
import AbstractRoute from "client/routes/abstract-route";

export default AbstractRoute.extend({
  model(params){
    return this.get('store').find('repo',params.repo_id);
  },
  afterModel(repo){
    if(!repo.get('labels.length')){
      this.get('store').query('label',{repo_id:repo.get('id')});
    }
    if(!repo.get('members.length')){
      this.get('store').query('repoMember',{repo_id:repo.get('id')});
    }
    if(!repo.get('state.length')){
      this.store.query('state', {repo_id: this.paramsFor('repo').repo_id}).then( (states) => {
        this.set('states', states);
      });
    }
  },
  actions: {
    didTransition: function() {
      //this.transitionTo('repo.stats')
    }
  }
});
