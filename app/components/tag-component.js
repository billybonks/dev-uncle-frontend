import Component from '@ember/component';

export default Component.extend({
  tagName:'span',
  classNames: ['ember-badge'],
  classNameBindings: ['isActive:badge-is-active:badge-in-active'],
  click(){
    this.sendAction('action', this.get('label'));
  }
});
