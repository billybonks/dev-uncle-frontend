import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class ControllerWorkflowsEdit extends Controller {
  @action
  transitionAfterSave() {
    this.transitionToRoute('repo.manage.workflows', this.get('model.repo'));
  }
}
