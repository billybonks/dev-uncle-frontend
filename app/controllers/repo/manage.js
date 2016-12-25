import Controller from 'ember-controller';
import { task } from 'ember-concurrency';

export default Controller.extend({
  labels: Ember.inject.service(),
  states: Ember.inject.service(),
  ajax: Ember.inject.service(),
  resolveHook: task(function * (repo) {
    if(this.get('model.hook_id')){
      yield this.get('ajax').request(`api/deleteHook?repo_id=${this.get('model.id')}`);
      this.set('model.hook_id', null);
    } else {
      let hook = yield this.get('ajax').request(`api/installHook?repo_id=${this.get('model.id')}`);
      this.set('model.hook_id', 1);
    }
  }),
  actions: {
    resolveHook(repo){
      this.get('resolveHook').perform(repo)
    }
  }
});
