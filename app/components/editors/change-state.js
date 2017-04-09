import Component from 'ember-component';
import service from 'ember-service/inject';

export default Component.extend({
  states: service(),
  init(){
    this._super(...arguments);
    let label = this.get('states').findLabel(this.get('rule.rules.change_state'), this.get('labels'));
    this.set('selected', label);
  },
  actions:{
    setChangeLabel(label){
      this.set('selected', label);
      this.set('rule.rules.change_state', label.get('id'));
    }
  }
});
