import Component from '@ember/component';
import RSVP from 'rsvp';
import {action} from '@ember-decorators/object';
import { service } from '@ember-decorators/service';
export default class ComponentWorkflowEditor extends Component {
  @service store;

  @action
  addRule(){
    debugger
    let rule = this.get('store').createRecord('rule');
    rule.set('rules', {});
    this.get('workflow.rules').pushObject(rule);
  }

  @action
  saveWorkflow(workflow){
    let promises = workflow.rules.map( (rule) => {
      return rule.save();
    });
    RSVP.all(promises).then(() => {
      workflow.save().then((workflow) => {
        this.transitionAfterSave(workflow);
      });
    });
  }
}
