import Component from 'ember-component';
import computed from 'ember-computed-decorators';

export default Component.extend({
  tagName:'span',
  classNames: ['tag','tag-default','sebpo-tag', 'pointer'],
  attributeBindings:['style'],

  @computed('label.color', 'label.isActive')
  style() {
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
