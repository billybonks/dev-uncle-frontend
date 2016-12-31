import Component from 'ember-component';
import computed from 'ember-computed';
import { task } from 'ember-concurrency';
import  inject from 'ember-service/inject'
export default Component.extend({
  ajax:   inject(),
  states: inject(),
  labels: inject(),
  label:  computed('labels', {
    get(key) {
      return this.get('states')[this.get('stateName')](this.get('labels'))
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
      if(this.get('label')){
        this.set('label.state_id', null);
      }
      let state = this.get('states').findByName(this.get('stateName'));
      this.set('label', label);
      label.set('state_id', state.id);
    }
  }
})
