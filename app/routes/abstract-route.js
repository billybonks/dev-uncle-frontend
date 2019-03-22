import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { pluralize } from 'ember-inflector';

export default Route.extend({
  fixedHeader: service(),
  actions: {
    didTransition: function() {
      // this.set('fixedHeader.title', this.get('title'));
      this.set('fixedHeader.controlsPath', this.get('controlsPath'));
      this.set('fixedHeader.controlsParams', this.get('controlsParams'));
      return false;
    },
  },
  ensureRecord(parentModel,childModelName, target){
    let pluralizedype = pluralize(childModelName);
    if(!parentModel.get(`${pluralizedype}.length`)){
      return this.store.query(childModelName, {repo_id: parentModel.get('id')}).then( (results) => {
        if(target){
          target.set(pluralizedype, results);
        }
      });
    }
  },
});
