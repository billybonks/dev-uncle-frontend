import Controller from 'ember-controller';
import { task } from 'ember-concurrency';
export default Controller.extend({
  ajax: Ember.inject.service(),
  states: Ember.inject.service(),
  model: [],
  init(){
    this.get('loadAvaliableRepos').perform()
  },
  loadAvaliableRepos: task( function *() {
    let repos = yield this.get('ajax').request('api/github_repos');
    this.set('availableRepos', repos);
  }),
  resolveHook: task(function * (repo) {
    if(repo.hook_id){
      yield this.get('ajax').request(`api/deleteHook?repo_id=${repo.get('id')}`);
      repo.set('hook_id', null);
    } else {
      let hook = yield this.get('ajax').request(`api/installHook?repo_id=${repo.get('id')}`);
      repo.set('hook_id', 1);
    }
  }),
  installRepo: task(function * () {
    let result = yield this.get('ajax').request(`api/install?repo=${this.get('selectedRepo')}`);
    debugger
    this.get('model').push(result.repo);
    this.notifyPropertyChange('model')
  }),
  actions: {
    resolveHook(repo){
      this.get('resolveHook').perform(repo)
    },
    installRepo(){
      this.get('installRepo').perform()
    },
    selectedRepo(repoName){
      this.set('error',null)
      this.set('selectedRepo',repoName);
    }
  }
});
