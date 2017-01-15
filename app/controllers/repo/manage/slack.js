import Controller from 'ember-controller';
import { task } from 'ember-concurrency';
import computed from 'ember-computed';
import service from 'ember-service/inject';

export default Controller.extend({
  ajax: service(),
  session: service(),
  saveSlack: task(function *(){
    yield this.get('model').save();
  }),
  slackOrgs: computed({
    get(){
      this.store.findAll('slackOrganization').then( (orgs) => {
        console.log(orgs);
        this.set('slackOrgs',orgs)
      });
    },
    set(_, value){
      return value;
    }
  }),
  actions: {
    setSlackOrg(org){
      this.set('model.slackOrganization', org)
    },
  }
});
