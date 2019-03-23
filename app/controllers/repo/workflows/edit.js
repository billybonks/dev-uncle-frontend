import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { action } from '@ember-decorators/object';

export default class ControllerWorkflowsEdit extends Controller {
  workflow = alias('model')

  @action
  transitionAfterSave() {
    this.transitionToRoute('repo.manage.workflows', this.get('workflow.repo'));
  }
}
