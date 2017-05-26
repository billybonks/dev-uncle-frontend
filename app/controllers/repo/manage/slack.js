import Controller from 'ember-controller';
import { task } from 'ember-concurrency';
import service from 'ember-service/inject';

export default Controller.extend({
  ajax: service(),
  session: service(),
  saveSlack: task(function *(){
    yield this.get('model').save();
  }),
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
