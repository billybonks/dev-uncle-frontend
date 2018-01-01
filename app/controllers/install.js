import Controller from 'ember-controller';
import { task } from 'ember-concurrency';
import service from 'ember-service/inject';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  ajax: service(),
  states: service(),
  init(){
    this.get('loadAvaliableRepos').perform();
  },
  repo: alias('model'),
  actions: {
    installRepo(){
      this.get('installRepo').perform();
    },
    selectedRepo(repoName){
      this.set('error',null);
      this.set('selectedRepo',repoName);
    }
  },
  loadAvaliableRepos: task( function *() {
    let repos = yield this.get('ajax').request('api/github_repos');
    this.set('availableRepos', repos);
  }),
  installRepo: task(function * () {
    let newRepo = this.get('store').createRecord('repo',{name:this.get('selectedRepo')});
    yield newRepo.save();
  }),
});
