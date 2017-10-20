import Component from '@ember/component';

export default Component.extend({
  init(){
    this._super(...arguments);
    this.get('labels').then( (labels) => {
      this.set('stateLabels',labels.filterBy('isState', true));
    });
  },
  actions: {
    saveStateLabels(){
      this.get('labels').forEach( (label) => {
        if(label.get('hasDirtyAttributes')){
          label.save();
        }
      });
    },
    //TODO: very naive approach just marking everything false and then marking everything as true
    //sigh
    stateLabelsChanged(stateLabels) {
      this.get('labels').forEach( (label) => {
        label.set('isState', false);
      });
      stateLabels.forEach( (stateLabel) => {
        stateLabel.set('isState', true);
      });
      this.set('stateLabels', stateLabels);
    }
  }
});
