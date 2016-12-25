import Component from 'ember-component';
import computed from 'ember-computed';
import { task } from 'ember-concurrency';
import  inject from 'ember-service/inject'
export default Component.extend({
  ajax:   inject(),
  states: inject(),
  labels: inject(),
  label:  computed('labels.currentLabels', {
    get(key) {
      return this.get('states')[this.get('stateName')](this.get('labels.currentLabels'))
    },
    set(key, value) {
      return value;
    }
  }),
  save: task(function *(){
    return this.get('ajax').request('/api/states', {
      method: 'POST',
      data: {
        state_id: this.get('stateName'),
        label_id: this.get('label.id')
      }
    });
  }),
  actions:{
    changeLabel(label){
      this.set('label', label);
    },
    save(){

    }
  }
})
