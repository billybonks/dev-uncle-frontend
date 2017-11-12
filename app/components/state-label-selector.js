import Component from '@ember/component';
import { get, set } from '@ember/object';
import { action } from 'ember-decorators/object';

export default class StateLabelSelector extends Component {
  constructor(){
    super(...arguments);
    get(this, 'labels').then(this.setStateLabels.bind(this));
  }

  setStateLabels(labels){
    set(this, 'stateLabels', labels.filterBy('isState', true));
  }

  @action
  saveStateLabels() {
    this.get('labels').forEach( (label) => {
      if(label.get('hasDirtyAttributes')){
        label.save();
      }
    });
  }

  //TODO: very naive approach just marking everything false and then marking everything as true
  //sigh
  @action
  stateLabelsChanged(stateLabels) {
    this.get('labels').forEach( (label) => {
      label.set('isState', false);
    });
    stateLabels.forEach( (stateLabel) => {
      stateLabel.set('isState', true);
    });
    this.set('stateLabels', stateLabels);
  }
}
