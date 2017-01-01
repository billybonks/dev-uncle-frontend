import Controller from 'ember-controller';
import computed from 'ember-computed';
import service from 'ember-service/inject';

export default Controller.extend({
  count:computed('model.length', function(){
    return this.get('model.length')
  }),
  actions:{

    waitAFewSeconds(){
      this.get('waitAFewSeconds').perform();
    }

  }
});
