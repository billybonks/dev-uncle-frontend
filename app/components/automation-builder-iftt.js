import Component from '@ember/component';
import get from "ember-metal/get";
import set from "ember-metal/set";
import { computed, action } from 'ember-decorators/object';

export default class AutomationBuilderIftt extends Component {
  @computed('rule.event')
  get selectedEvent(){
    return {
      step:this.get('events').findBy('name', this.get('rule.event'))
    };
  }

  @computed('selectedEvent','rule.rules')
  get selectedAction() {
    return {
      step: get(get(this, 'selectedEvent.step'), 'actions').findBy('key', this.get('rule.rules.action')),
      data: get(this, 'rule.rules.data'),
    };
  }

  @action
  updated(workflow){
    let rules = {
      action: get(workflow, 'action.step.key'),
      data: get(workflow, 'action.data'),
      filters: (get(workflow, 'filters') || []).map( (filter) => {
        return {
          property: get(filter, 'step.key'),
          comparator: get(filter, 'comparator.key'),
          data: get(filter, 'data')
        };
      })
    };
    console.log(rules)
    set(this, 'rule.event', get(workflow, 'event.name'));
    set(this, 'rule.rules', rules);
  }

}
