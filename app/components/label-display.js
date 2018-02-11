import Component from '@ember/component';
import { computed } from 'ember-decorators/object';

export default Component.extend({
  tagName:'span',
  classNames: ['tag','tag-default','sebpo-tag'],
  attributeBindings:['style'],

  @computed('label.{color.isActive}')
  get style() {
    let background = `background-color:#${this.get('label.color')}`;
    if(this.get('label.isActive')){
      return background;
    }
    if(!this.get('selectable')){
      return background;
    }
  },
  click(){
    this.sendAction('action', this.get('label'));
  }
});
