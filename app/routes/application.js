import Ember from 'ember';
import service from 'ember-service/inject';
import AbstractRoute from "client/routes/abstract-route";

export default AbstractRoute.extend({
  ajax: service(),
  session: service(),
  failed: false,
  model(){
    return this.get('store').findAll('repo').catch( (err) => {
      this.transitionTo('login');
      this.set('failed', true)
    });
  },

  setupController(controller, model){
    controller.set('model', model);
    controller.set('failed', this.get('failed'))
    this.get('ajax').request('api/me').then( (results) => {
      this.set('session.user', results)
      controller.set('user', results)
   })
  }

});
