import Controller from 'ember-controller';
import { task } from 'ember-concurrency';
import service from 'ember-service/inject';

export default Controller.extend({
  ajax: service(),
  states: service(),
  model: [],
  init(){
    this.get('loadAvaliableRepos').perform()
  },
  loadAvaliableRepos: task( function *() {
    let repos = yield this.get('ajax').request('api/github_repos');
    this.set('availableRepos', repos);
  }),
  installRepo: task(function * () {
    let result = yield this.get('ajax').request(`api/install?repo=${this.get('selectedRepo')}`);
    this.get('model').push(result.repo);
    this.notifyPropertyChange('model')
  }),
  actions: {
    installRepo(){
      this.get('installRepo').perform()
    },
    selectedRepo(repoName){
      this.set('error',null)
      this.set('selectedRepo',repoName);
    }
  }
});
