import Component from '@ember/component';
import get from 'ember-metal/get';
import set from 'ember-metal/set';
import { action, computed } from 'ember-decorators/object';

export default class SingleStepBuilder extends Component {

  constructor(){
    super(...arguments);
    if(this.get('configurable') == null){
      this.set('configurable', true);
    }
    set(this, '_step', get(this, 'step'));
    set(this, '_stepData', get(this, 'stepData'));
    if(!get(this, 'editorKey')){
      set(this, 'editorKey', 'editor');
    }
    if(!get(this, 'editorName')){
      let comptued = Ember.computed('_step', () => {return get(this, `_step.${get(this, 'editorKey')}`);});
      Ember.defineProperty(this, 'editorName', comptued);
    }
  }

  @action
  changeStep(step){
    this.set('_step', step);
    this.updateStep();
  }

  @action
  stepDataChanged(stepData){
    this.set('_stepData', stepData);
    this.updateStep();
  }

  updateStep(){
    get(this,'stepChanged')(this.buildUpdatePayload());
  }

  buildUpdatePayload(){
    if(!get(this, 'configurable')) {
      return get(this, '_step');
    } else {
      return {
        step: get(this, '_step'),
        data: get(this, '_stepData')
      };
    }
  }
}

/*
if(object){
  return get(this, 'stepChanged')(get(this, 'step'), object || get(this, 'stepObject'));
}
object = get(this, 'stepObject');
let stepKey = get(object, get(this, 'pathToStepKey'));
let compiledStep = null;
if(this.get('configurable')){

  compiledStep = {};
  compiledStep[this.get('returnShape')[0]] = stepKey;
  compiledStep[this.get('returnShape')[1]] = get(this, 'stepData');
} else {
  compiledStep = stepKey;
}
get(this, 'stepChanged')(compiledStep, object || get(this, 'stepObject'));
*/
