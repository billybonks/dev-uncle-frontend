import Component from '@ember/component';

export default Component.extend({
  tagName:'span',
  classNames: ['tag','tag-default','sebpo-tag'],
  classNameBindings: ['isActive'],
  click(){
    this.sendAction('action', this.get('label'));
  }
});
