import Component from 'ember-component';

export default Component.extend({
  tagName: "button",
  classNames: ["btn", "btn-primary"],
  attributeBindings:["disabled"],
  click(){
    this.get('task').perform
  }
})
