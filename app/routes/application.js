import { inject as service } from '@ember/service';
import AbstractRoute from "client/routes/abstract-route";
import fetch from 'fetch';

export default AbstractRoute.extend({
  session: service(),
  unAuthenticated: false,
  async model(){
    try {
      let orgs = await this.get('store').findAll('organisation');
      debugger
      await this.get('store').findAll('repo');
      return orgs.firstObject;
    } catch(e) {
      this.transitionTo('login');
      this.set('unAuthenticated', true);
    }
  },

  setupController(controller, model) {
    controller.set('model', model);
    controller.set('unAuthenticated', this.get('unAuthenticated'));
    fetch('api/me').then( (resultsRaw) => {
      let results = resultsRaw.json();
      this.set('session.user', results);
      controller.set('user', results);
    });
  }

});
