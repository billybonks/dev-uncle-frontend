import { A } from '@ember/array';
import Component from 'ember-component';
import EmberObject from 'ember-object';

export default Component.extend({
  init(){
    if(!this.get('value')){
      this.set('value', A());
    }
    this._super(...arguments);
    let labels = this.get('model').map((label) => {
      return new EmberObject({
        id: label.get('id'),
        name: label.get('name'),
        color: label.get('color'),
        isActive: this.get('value').includes(`${label.get('id')}`)
      });
    });
    this.set('labels', labels);
  },
  actions:{
    labelToggled(label){
      label.set('isActive', !label.get('isActive'));
      let labelIds = this.get('labels').reduce( (acc, label) => {
        if(label.get('isActive')){
          acc.push(label.get('id'));
        }
        return acc;
      }, []);
      this.sendAction('action',this.get('filter'), labelIds);
    }
  }
});
