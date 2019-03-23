import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  session: service(),
  slackSettings: alias('model'),
  actions: {
    setSlackOrg(org) {
      this.set('model.slackOrganization', org);
    },
    addFilterNotifcation(notification) {
      notification.set('repo', this.get('repo'));
      notification.save().then((notification) => {
        this.get('slackNotifications').pushObject(notification);
      });
    },
  },
});
