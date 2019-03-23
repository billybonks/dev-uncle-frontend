import Component from '@ember/component';
import { action } from '@ember-decorators/object';

export default class ActionApplyLabel extends Component {
  @action
  labelSelected(label) {
    this.set('selectedLabel', label);
    this.onUpdated({ label: label.id });
  }
}
