import Component from 'ember-component';

export default Component.extend({
  actions:{
    labelToggled(label){
      label.set('active', !label.get('active'));
    }
  }
});
