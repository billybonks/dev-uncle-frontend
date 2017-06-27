import Ember from 'ember';
import service from 'ember-service/inject';
export default Ember.Route.extend({
  fixedHeader: service(),
  ensureRecord(parentModel,childModelName, target){
    let pluralizedype = Ember.String.pluralize(childModelName);
    if(!parentModel.get(`${pluralizedype}.length`)){
      return this.store.query(childModelName, {repo_id: parentModel.get('id')}).then( (results) => {
        if(target){
          target.set(pluralizedype, results);
        }
      });
    }
  },
  actions: {
    didTransition: function() {
      this.set('fixedHeader.title', this.get('title'));
      this.set('fixedHeader.controlsPath', this.get('controlsPath'));
      this.set('fixedHeader.controlsParams', this.get('controlsParams'));
      return false;
    }
  }
});
