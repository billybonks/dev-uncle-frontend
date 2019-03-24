import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class ControllerWorkflowsNew extends Controller {
  @action
  transitionAfterSave() {
    this.transitionToRoute('repo.manage.workflows', this.get('repo'));
  }
}
