import Controller from 'ember-controller';
import computed from 'ember-computed';

export default Controller.extend({
  count:computed('model.length', function(){
    return this.get('model.length');
  })
});
