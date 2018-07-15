import { inject as service } from '@ember/service';
import AbstractRoute from "client/routes/abstract-route";

export default AbstractRoute.extend({
  ajax: service(),
  session: service(),
  unAuthenticated: false,
  model(){
    return this.get('store').findAll('repo').catch( () => {
      this.transitionTo('login');
      this.set('unAuthenticated', true);
    });
  },

  setupController(controller, model){
    controller.set('model', model);
    controller.set('failed', this.get('failed'));
    this.get('ajax').request('api/me').then( (results) => {
      this.set('session.user', results);
      controller.set('user', results);
   });
  }

});
