import Component from 'ember-component';
import { computed } from 'ember-decorators/object';

export default Component.extend({
  tagName: 'span',
  classNames: ['filter-tab'],
  classNameBindings: ['active'],

  @computed('filter.isActive')
  active(){
    if(this.get('filter.isActive')){
      return 'filter-tab__active';
    }
  },

  click(){
    this.sendAction('selectFilter', this.get('filter'));
  }
});
