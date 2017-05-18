import Component from 'ember-component';
import EmberObject from 'ember-object';

export default Component.extend({
  init(){
    this._super(...arguments);
    let labelFilters = this.get('filter.filters.labels') || [];
    let labels = this.get('model').map((label) => {
      return new EmberObject({
        id: label.get('id'),
        name: label.get('name'),
        color: label.get('color'),
        isActive: labelFilters.includes(`${label.get('id')}`)
      });
    });
    this.set('labels', labels);
  },
  actions:{
    labelToggled(label){
      label.set('isActive', !label.get('isActive'));
      this.sendAction('action', this.get('labels'));
    }
  }
});
