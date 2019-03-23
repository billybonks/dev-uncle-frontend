import { A } from '@ember/array';
import Component from '@ember/component';
import EmberObject from '@ember/object';
import { computed, action } from '@ember-decorators/object';

export default class FiltersEditorsLabelPicker extends Component {
  constructor() {
    super(...arguments);
    if (!this.get('value')) {
      this.set('value', A());
    }
  }

  @computed('labels.[]', 'value.[]')
  get _labels() {
    const labels = this.get('labels');
    if (labels) {
      return labels.map(label => new EmberObject({
        id: label.get('id'),
        name: label.get('name'),
        color: label.get('color'),
        isActive: this.get('value').includes(`${label.get('id')}`),
      }));
    }
    return [];
  }

  @action
  labelToggled(label) {
    label.set('isActive', !label.get('isActive'));
    const labelIds = this.get('_labels').reduce((acc, label) => {
      if (label.get('isActive')) {
        acc.push(label.get('id'));
      }
      return acc;
    }, []);
    this.filterUpdated(labelIds);
  }
}
