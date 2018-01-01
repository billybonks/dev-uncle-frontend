import Component from '@ember/component';
import { action } from 'ember-decorators/object';
import get from 'ember-metal/get';

export default class StateLabelSelector extends Component {
  constructor(){
    super(...arguments);
  }

  @action
  addStep(){
    this.get('steps').pushObject({});
  }

  @action
  removeStep(index){
    let array = this.get('steps');
    let splice = array.splice(index);
    array = array.concat(splice.splice(1));
    this.set('steps', new Ember.A(array));
    this.notifyPropertyChange('steps');
  }

  @action
  changedStep(index, step){
    let steps = this.get('steps');
    Object.assign(steps[index],step);
    this.get('stepsChanged')(steps)
  }

  didInsertElement(){
    if(!this.get('steps')){
      this.set('steps', new Ember.A());
    }
  }
}
