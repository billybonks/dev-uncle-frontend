import Component from 'ember-component';
import computed from 'ember-computed';

export default Component.extend({
  tagName:'span',
  classNames: ['tag','tag-default','sebpo-tag', 'pointer'],
  attributeBindings:['style'],
  style: computed('label.color', 'label.active', function() {
    if(this.get('label.active')){
      return `background-color:#${this.get('label.color')}`;
    }
  }),
  click(){
    this.sendAction('action', this.get('label'));
  }
});
