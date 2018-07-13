import Component from '@ember/component';
import { computed } from 'ember-decorators/object';

export default Component.extend({
  tagName: 'span',
  classNames: ['filter-tab'],
  classNameBindings: ['isActive:filter-tab__active'],

  click(){
    this.selectFilter();
  }
});
