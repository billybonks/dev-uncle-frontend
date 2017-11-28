import Component from '@ember/component';
import { action, computed } from 'ember-decorators/object';

export default class RuleMapper extends Component {
  constructor() {
    super(...arguments);
    if(!this.get('rule.rules')){
      this.set('rule.rules', {});
    }

    let events = [
      {
        name:'pull_request_synchronize',
        displayName: 'PR Code Updated',
        actions: ['apply_label, message_reviewers', 'message_channel']
      },
      {
        name:'pull_request_rejected',
        displayName: 'Reviewer Requested Changes',
        actions: ['apply_label, message_owner', 'message_channel']
      },
      {
        name:'pull_request_approved',
        displayName: 'Reviewer Approved Changes',
        actions: ['apply_label, message_owner', 'message_channel']
      },
      {
        name:'pull_request_opened',
        displayName: 'PR Opened',
        actions: ['apply_label, message_owner', 'message_channel']
      }
    ];
    this.set('events', events);
  }

  @computed('rule.event')
  get selectedEvent() {
    return this.get('events').filterBy('name',this.get('rule.event'))[0];
  }

  set selectedEvent(event) {
    this.set('rule.event', event.name);
    return event;
  }


  @computed('rule.event')
  editor(){
    return 'editors-rules-default-editor';
  }

  @action
  changeEvent(event){
    this.set('selectedEvent', event);
  }

  @action
  deleteRule(){
    this.get('rule').destroyRecord();
  }
}
