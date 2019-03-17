import { inject as service } from '@ember/service';
import Component from '@ember/component';
import { task } from 'ember-concurrency';

export default Component.extend({
  store: service(),
  async init(...args) {
    this._super(args);
    const organisationId = this.organisation.get('id');
    const orgs = await this.store.findAll('slackOrganization');
    this.set('slackOrgs', orgs);
    let record = await this.store.queryRecord('slackSetting', { organisationId });
    if (!record) {
      record = this.store.createRecord('slackSetting');
      record.set('organisation', this.organisation);
    }
    this.set('slackSetting', record);
  },
  actions: {
    redirectSlackAuth() {
      window.location = '/api/auth/slack';
    },
    setSlackOrg(org) {
      this.set('slackSetting.slackOrganization', org);
    },
  },
  saveSlack: task(function* saveSlack() {
    yield this.slackSetting.save();
  }),
});
