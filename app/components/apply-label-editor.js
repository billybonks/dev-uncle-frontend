import Component from '@ember/component';
import { action } from '@ember-decorators/object';

export default class ApplyLabelEditor extends Component {
  @action
  labelSelected(label){
    this.set('selectedLabel', label);
    this.onUpdated(label);
  }
}
