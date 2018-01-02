import Component from '@ember/component';
import get from "ember-metal/get";
import set from "ember-metal/set";
import { action, computed } from 'ember-decorators/object';

export default class WorkflowBuilderIftt extends Component {
  constructor() {
    super(...arguments);
    let step = get(this, 'event.step');
    set(this, 'selectedEvent', step);
    set(this, 'selectedAction', get(this, 'action.step'));
    set(this, 'selectedActionData', get(this, 'action.data'));
    set(this, 'selectedConditions', get(this, 'condtions.step'));
    this.send('changedEvent', step);
    Ember.run.next(() => {
      if(! get(this, 'isDestroyed')){
        set(this, 'selectedAction', {
          step: get(this, 'selectedAction'),
          data: get(this, 'selectedActionData')
        });
      }
    });
  }

  @computed('selectedEvent', 'selectedAction', 'selectedCondtions')
  get publicAPI(){
    return {
      selectedEvent: get(this, 'selectedEvent'),
      selectedAction: get(this, 'selectedAction'),
      selectedActionData: get(this, 'selectedActionData'),
      selectedConditions: get(this, 'selectedConditions'),
    };
  }

  @action
  changedEvent(step){
    if(step) {
      set(this, 'selectedEvent', step);
      set(this, 'availableActions', step.actions);
      set(this, 'availableConditions', step.attributes);
    }
  }

  @action
  changeAction(action){
    set(this,'selectedAction', action);
    this._updated();
  }

  @action
  changeFilters(filters){
    set(this, 'selectedFilters', filters);
    this._updated();
  }

  _updated(){
    get(this,'updated')({
      event: get(this, 'selectedEvent'),
      action: get(this, 'selectedAction'),
      filters: get(this, 'selectedFilters'),
    });
  }
}


// import makeArray from '@ember/array'
// @action
// removeStep(index){
//   let array = get(this, 'selectedEvents');
//   array.splice(index);
//   set(this, 'selectedEvents', new makeArray(array));
// }
