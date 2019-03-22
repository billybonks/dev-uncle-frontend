import { inject as service } from '@ember/service';
import Component from '@ember/component';
import { task } from 'ember-concurrency';

export default Component.extend({
  store: service(),
  init(){
    this._super(...arguments);
    let repoId = this.get('repo.id');
    let store = this.get('store');
    store.findAll('slackOrganization').then( (orgs) => {
      this.set('slackOrgs', orgs);
    });

    store.queryRecord('slackSetting', {repoId}).then( (record) => {
      if (!record){
        record = this.get('store').createRecord('slackSetting');
        record.set('repo', this.get('repo'));
      }
      this.set('slackSetting', record);
    });
  },
  actions:{
    redirectSlackAuth(){
      window.location = '/api/auth/slack';
    },
    setSlackOrg(org){
      this.set('slackSetting.slackOrganization', org);
    },
  },
  saveSlack: task(function *(){
    yield this.get('slackSetting').save();
  }),
});
