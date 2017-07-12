import Component from 'ember-component';
import service from 'ember-service/inject';

export default Component.extend({
  states: service(),
  init(){
    this._super(...arguments);
    let label = this.get('labels').filterBy('id', this.get('rule.rules.apply_label'));
    this.set('selected', label[0]);
  },
  actions:{
    setChangeLabel(label){
      this.set('selected', label);
      this.set('rule.hasDirtyAttributes', true);
      this.set('rule.rules.apply_label', label.get('id'));
    }
  }
});
