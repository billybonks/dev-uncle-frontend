import Controller from '@ember/controller';
import { computed }  from '@ember/object';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  repo: alias('model'),
  count: computed('model.length', function(){
    return this.get('model.length');
  }),
});
