import Component from '@ember/component';
import RSVP from 'rsvp';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ComponentWorkflowEditor extends Component {
  @service store;
  @service automation;

  @action
  addRule() {
    const rule = this.get('store').createRecord('rule');
    rule.set('rules', {});
    rule.set('repo', this.get('workflow.repo'));
    rule.set('organisation', this.get('workflow.organisation'));
    this.get('workflow.rules').pushObject(rule);
  }

  @action
  saveWorkflow(workflow) {
    const promises = workflow.rules.map(rule => rule.save());
    RSVP.all(promises).then(() => {
      workflow.save().then((savedWorkflow) => {
        this.transitionAfterSave(savedWorkflow);
      });
    });
  }
}
