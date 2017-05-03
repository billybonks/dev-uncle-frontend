import Ember from 'ember';
import AbstractRoute from "client/routes/abstract-route";

export default AbstractRoute.extend({
  model(params){
    return this.get('store').find('repo',params.repo_id);
  },
  afterModel(repo){
    if(!repo.get('members.length')){
      this.get('store').query('repoMember',{repo_id:repo.get('id')});
    }
    this.ensureRecord(repo, 'rule');
    this.ensureRecord(repo, 'filter');
    this.ensureRecord(repo, 'label');
  },
  ensureRecord(parentModel,childModelName){
    if(!parentModel.get(`${Ember.String.pluralize(childModelName)}.length`)){
      this.store.query(childModelName, {repo_id: parentModel.get('id')}).then( (results) => {
        this.set(childModelName, results);
      });
    }
  }
});
