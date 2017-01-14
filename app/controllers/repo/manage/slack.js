import Controller from 'ember-controller';
import { task } from 'ember-concurrency';
import computed from 'ember-computed';
import service from 'ember-service/inject';

export default Controller.extend({
  ajax: service(),
  saveSlack: task(function *(){
    results = yield this.get('ajax').request(`api/slack/orgs`,{
      method: 'POST',
      data: {
        slack_id: this.get('slack.id'),
        slack_channel: this.get('slackChannel'),
        repo_id: this.get('model.id')
      }
    })
  }),
  slackOrgs: computed({
    get(){
      this.get('ajax').request('api/slack/orgs').then( (orgs) => {
        this.set('slackOrgs',orgs)
      })
    },
    set(_, value){
      return value;
    }
  }),
  actions: {
    setSlackOrg(org){
      this.set('slack', org)
    }
  }
});
