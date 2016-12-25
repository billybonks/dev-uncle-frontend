import Controller from 'ember-controller';

export default Controller.extend({
  labels: Ember.inject.service(),
  states: Ember.inject.service()
});
