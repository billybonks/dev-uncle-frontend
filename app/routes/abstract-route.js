import Ember from 'ember';
import service from 'ember-service/inject';
export default Ember.Route.extend({
  fixedHeader: service(),
  actions: {
    didTransition: function() {
      this.set('fixedHeader.title', this.get('title'))
      this.set('fixedHeader.controlsPath', this.get('controlsPath'))
      this.set('fixedHeader.controlsParams', this.get('controlsParams'))
      return false;
    }
  }
});
