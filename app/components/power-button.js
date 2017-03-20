import Component from 'ember-component';

export default Component.extend({
  tagName: "button",
  classNames: ["btn", "btn-primary"],
  attributeBindings:["disabled"],
  text: 'save',
  click(){
    if(this.get('action')){
      this.sendAction('action');
    } else {
      this.get('task').perform();
    }
  }
});
