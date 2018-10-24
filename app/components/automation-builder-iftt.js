import Component from '@ember/component';
import { action } from '@ember-decorators/object';

export default class AutomationBuilderIftt extends Component {
  @action
  onDataUpdated(label) {
    this.set('rule.rules.data', {label:label.id});
  }

  @action
  actionSelected(actionHash) {
    this.set('rule.rules.action', actionHash.key);
  }
}
