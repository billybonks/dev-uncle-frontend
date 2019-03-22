import Component from '@ember/component';

export default Component.extend({
  tagName: "button",
  classNames: ["power-button"],
  attributeBindings:["disabled"],
  text: 'save',
  click(){
    if(this.action){
      this.action();
    } else {
      this.task.perform();
    }
  },
});
