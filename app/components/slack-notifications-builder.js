import Component from '@ember/component';
import { inject } from '@ember/service';

const INTERVAL = ['daily', 'weekly', 'hourly'];
const TIME = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const TYPE = ['overview', 'private', 'summary'];

export default Component.extend({
  store: inject(),
  intervals: INTERVAL,
  times: TIME,
  types: TYPE,
  init(){
    this._super(...arguments);
    this.resetNotification();
  },
  actions: {
    addFilterNotifcation(){
      this.sendAction('addedFilterNotification', this.get('notification'));
      this.resetNotification();
    },
  },
  resetNotification(){
    this.set('notification', this.get('store').createRecord('slack-notification'));
  },
});
