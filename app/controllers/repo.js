import Controller from 'ember-controller';
import computed from 'ember-computed';

export default Controller.extend({
  ajax: Ember.inject.service(),
  count:computed('model.length', function(){
    return this.get('model.length')
  }),

  actions:{

    waitAFewSeconds(){
      debugger
      this.get('waitAFewSeconds').perform();
    }

  }
});
