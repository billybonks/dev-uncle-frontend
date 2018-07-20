import { A } from '@ember/array';
import Component from '@ember/component';
import EmberObject from '@ember/object';
import { computed } from 'ember-decorators/object';

export default Component.extend({
  init(){
    this._super(...arguments);
    if(!this.get('value')){
      this.set('value', A());
    }
  },

  @computed('labels.[]')
  get _labels() {
    let labels = this.get('labels');
    if(labels){
      return labels.map((label) => {
        return new EmberObject({
          id: label.get('id'),
          name: label.get('name'),
          color: label.get('color'),
          isActive: this.get('value').includes(`${label.get('id')}`)
        });
      });
    }
  },

  actions:{
    labelToggled(label){
      label.set('isActive', !label.get('isActive'));
      let labelIds = this.get('_labels').reduce( (acc, label) => {
        if(label.get('isActive')){
          acc.push(label.get('id'));
        }
        return acc;
      }, []);
      debugger
      this.filterUpdated(labelIds);
    }
  }
});
