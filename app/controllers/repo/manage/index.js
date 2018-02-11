import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import { task } from 'ember-concurrency';

export default Controller.extend({
  states: service(),
  ajax: service(),
  repo: alias('model'),

  actions: {
    addRule(){
      let rule = this.get('store').createRecord('rule');
      this.get('repo.rules').pushObject(rule);
    },
    saveRules(){
      this.get('repo.rules').forEach( (rule) => {
        if(rule.get('hasDirtyAttributes')){
          rule.save();
          rule.set('hasDirtyAttributes', false);
        }
      });
    },
    setSlackOrg(org){
      this.set('slack', org);
    },
    resolveHook(repo){
      this.get('resolveHook').perform(repo);
    }
  },

  resolveHook: task(function * () {
    if(this.get('model.hook_id')){
      yield this.get('ajax').request(`api/deleteHook?repo_id=${this.get('model.id')}`);
      this.set('model.hook_id', null);
    } else {
      yield this.get('ajax').request(`api/installHook?repo_id=${this.get('model.id')}`);
      this.set('model.hook_id', 1);
    }
  }),
  saveLabels: task(function * (stateMappings){
    yield stateMappings.map(this.saveLabel);
  }),
  
  saveLabel: function(mapping){
     let oldLabel = this.get('repo.labels').filterBy('state_id', mapping.state.id)[0];
     let newLabel = this.get('repo.labels').filterBy('id', mapping.label.id)[0];
     if(oldLabel){
       oldLabel.set('state_id', null);
       oldLabel.save();
     }
     newLabel.set('state_id', mapping.state.id);
     return newLabel.save();
   }
});
