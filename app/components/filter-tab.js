import Component from 'ember-component';
import computed from 'ember-computed';

export default Component.extend({
  tagName: 'span',
  classNames: ['filter-tab'],
  classNameBindings: ['active'],
  active: computed('filter.isActive', function(){
    if(this.get('filter.isActive')){
      return 'filter-tab__active';
    }
  }),
  click(){
    this.sendAction('selectFilter', this.get('filter'));
  }
});
