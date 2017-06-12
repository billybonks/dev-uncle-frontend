import Controller from 'ember-controller';
import { task } from 'ember-concurrency';
import computed from 'ember-computed-decorators';
import service from 'ember-service/inject';
export default Controller.extend({
  states: service(),
  ajax: service(),
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
    stateMappings.forEach( (mapping) => {
      let oldLabel = this.get('repo.labels').filterBy('state_id', mapping.state.id)[0];
      let newLabel = this.get('repo.labels').filterBy('id', mapping.label.id)[0];
      if(oldLabel){
        oldLabel.set('state_id', null);
        oldLabel.save();
      }
      newLabel.set('state_id', mapping.state.id);
      newLabel.save();
    });
  }),
  saveSlack: task(function *(){
    yield this.get('ajax').request(`api/slack/orgs`,{
      method: 'POST',
      data: {
        slack_id: this.get('slack.id'),
        slack_channel: this.get('slackChannel'),
        repo_id: this.get('model.id')
      }
    });
  }),

  @computed
  slackOrgs:{
    get(){
      this.get('ajax').request('api/slack/orgs').then( (orgs) => {
        this.set('slackOrgs',orgs);
      });
    },
    set(_, value){
      return value;
    }
  },
  actions: {
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
  }
});
