import Ember from 'ember';
import service from 'ember-service/inject';

export default Ember.Route.extend({
  ajax: service(),
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
     controller.set('user', results)
   })
  }

});
