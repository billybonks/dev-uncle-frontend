import Component from '@ember/component';
import { service } from 'ember-decorators/service';
import { action } from 'ember-decorators/object';

export default class EditorsRulesDefaultEditor extends Component {
  @service states;

  constructor() {
    super(...arguments);
    let label = this.get('labels').filterBy('id', this.get('rule.rules.apply_label'));
    this.set('selected', label[0]);
  }

  @action
  setChangeLabel(label) {
    this.set('selected', label);
    this.set('rule.hasDirtyAttributes', true);
    this.set('rule.rules.apply_label', label.get('id'));
  }
}
