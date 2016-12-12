import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model(){
    return this.get('ajax').request('api/repos').then((repos) => {
      return repos.repos.map( (repo) => {
        return Ember.Object.create(repo);
      });
    });
  }
});
