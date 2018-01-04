import Controller from 'ember-controller';
import { alias } from '@ember/object/computed';

export default class ControllerWorkflowsNew extends Controller {
  repo = alias('model.repo')
  workflow = alias('model.workflow')
}
