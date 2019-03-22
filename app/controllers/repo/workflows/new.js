import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { action } from '@ember-decorators/object';

export default class ControllerWorkflowsNew extends Controller {
  repo = alias('model.repo')
  workflow = alias('model.workflow')

  @action
  transitionAfterSave() {
    this.transitionToRoute('repo.manage.workflows', this.get('repo'));
  }
}
