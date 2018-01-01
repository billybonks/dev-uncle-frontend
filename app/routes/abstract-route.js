import Route from '@ember/routing/route';
import Ember from 'ember';
import service from 'ember-service/inject';
export default Route.extend({
  fixedHeader: service(),
  actions: {
    didTransition: function() {
      // this.set('fixedHeader.title', this.get('title'));
      this.set('fixedHeader.controlsPath', this.get('controlsPath'));
      this.set('fixedHeader.controlsParams', this.get('controlsParams'));
      return false;
    }
  },
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
});
