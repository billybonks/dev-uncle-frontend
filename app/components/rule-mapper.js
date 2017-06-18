import Ember from 'ember';
import Component from 'ember-component';
import computed from 'ember-computed-decorators';

export default Component.extend({
  events: [
    'pull_request_synchronised',
    'pull_request_rejected',
    'pull_request_opened'
  ],
  init(){
    this._super(...arguments);
    if(!this.get('rule.rules')){
      this.set('rule.rules', {});
    }
  },
  @computed('rule.event')
  editor(){
    return 'editors/rules/default-editor';
  },
  actions: {
    changeEvent(event){
      this.set('rule.event', event)
    },
    deleteRule(){
      this.get('rule').destroyRecord();
    }
  }
});
