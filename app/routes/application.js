import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model(){
    return this.get('store').findAll('repo');
  },

  setupController(controller, model){
    controller.set('model', model);
    this.get('ajax').request('api/me').then( (results) => {
     controller.set('user', results)
    });
  }

});
