import Controller from 'ember-controller';
import service from 'ember-service/inject';

export default Controller.extend({
  ajax: service(),
  session: service(),
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
