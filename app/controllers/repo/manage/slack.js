import Controller from 'ember-controller';
import { task } from 'ember-concurrency';
import service from 'ember-service/inject';
import computed from 'ember-computed-decorators';

export default Controller.extend({
  ajax: service(),
  session: service(),
  saveSlack: task(function *(){
    yield this.get('model').save();
  }),
  @computed
  slackOrgs:{
    get(){
      this.store.findAll('slackOrganization').then( (orgs) => {
        this.set('slackOrgs',orgs);
      });
    },
    set(_, value){
      return value;
    }
  },
  actions: {
    setSlackOrg(org){
      this.set('model.slackOrganization', org);
    },
    addFilterNotifcation(notification){
      notification.set('repo', this.get('repo'));
      notification.save().then( (notification) => {
        this.get('slackNotifications').pushObject(notification);
      });
    }
  }
});
