import Component from '@ember/component';
import { action } from '@ember-decorators/object';

export default class EditorsRulesDefaultEditor extends Component {
  selected = false

  constructor() {
    super(...arguments);
    const label = this.get('labels').filterBy('id', this.get('rule.rules.apply_label.label'));
    this.set('selected', label[0]);
  }

  @action
  setChangeLabel(label) {
    this.set('selected', label);
    this.set('rule.hasDirtyAttributes', true);
    this.set('rule.rules.apply_label', { label: label.get('id') });
  }
}
