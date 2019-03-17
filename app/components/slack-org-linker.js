import { inject as service } from '@ember/service';
import Component from '@ember/component';
import { task } from 'ember-concurrency';

export default Component.extend({
  store: service(),
  async init(){
    this._super(...arguments);
    let organisationId = this.organisation.get('id');
    let store = this.store;
    let orgs = await store.findAll('slackOrganization');
    this.set('slackOrgs', orgs);

    let record = store.queryRecord('slackSetting', {organisationId});
    if(!record){
      record = this.store.createRecord('slackSetting');
      record.set('repo', this.get('repo'));
    }
    this.set('slackSetting', record);
  },
  actions:{
    redirectSlackAuth(){
      window.location = '/api/auth/slack';
    },
    setSlackOrg(org){
      this.set('slackSetting.slackOrganization', org);
    }
  },
  saveSlack: task(function *(){
    yield this.get('slackSetting').save();
  }),
});
