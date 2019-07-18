import Component from '@ember/component';
import { action } from '@ember/object';

export default class AutomationBuilderIftt extends Component {
  @action
  actionDataUpdated(data) {
    this.set('rule.rules.data', data);
  }

  @action
  actionSelected(actionHash) {
    this.set('rule.rules.action', actionHash.key);
  }
}
