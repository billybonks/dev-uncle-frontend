import Component from '@ember/component';
import RSVP from 'rsvp';
import { action } from '@ember-decorators/object';
import { service } from '@ember-decorators/service';

export default class ComponentWorkflowEditor extends Component {
  @service store;

  @action
  addRule() {
    const rule = this.get('store').createRecord('rule');
    rule.set('rules', {});
    rule.set('repo', this.get('workflow.repo'));
    this.get('workflow.rules').pushObject(rule);
  }

  @action
  saveWorkflow(workflow) {
    const promises = workflow.rules.map((rule) => {
      return rule.save();
    });
    RSVP.all(promises).then(() => {
      workflow.save().then((workflow) => {
        this.transitionAfterSave(workflow);
      });
    });
  }
}
