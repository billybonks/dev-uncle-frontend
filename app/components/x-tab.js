import Component from '@ember/component';

export default Component.extend({
  tagName: 'span',
  classNames: ['filter-tab'],
  classNameBindings: ['isActive:filter-tab__active'],

  click(){
    this.selectFilter();
  }
});
