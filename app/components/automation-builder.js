import Component from '@ember/component';
import PullRequest from 'client/models/pull-request';

const applyLabel =  {
  label: 'Apply Label',
  key: 'apply_label',
  editor: 'association'
};

const messageReviewers = {
  label: 'Message Reviewers',
  key: 'message_reviewers'
  };

const messageOwner = {
  label: 'Message Owner',
  key: 'message_owner'
};

const messageChannel= {
  label: 'Message Channel',
  key: 'message_channel',
  editor: 'text'
};

const messageLastCommitter = {
  label: 'Message Last Committer',
  key: 'message_last_commit'
};

const actions = [applyLabel,messageReviewers,messageOwner,messageChannel];

export default class AutomationBuilder extends Component {

  constructor(){
    super(...arguments);
    this.constructEvents();
    let prTypes = this.generateTypeArray(PullRequest.prototype);
    this.get('events').forEach( (event) => {
      event.attributes = prTypes;
    });
  }

  constructEvents(){
    let events = [
      {
        name:'pull_request_synchronize',
        displayName: 'PR Code Updated',
        actions: actions
      },
      {
        name:'branch_built',
        displayName: 'Branch CI has run',
        actions: [messageChannel, messageLastCommitter],
      },
      {
        name:'pull_request_rejected',
        displayName: 'Reviewer Requested Changes',
        actions: actions
      },
      {
        name:'pull_request_approved',
        displayName: 'Reviewer Approved Changes',
        actions: actions
      },
      {
        name:'pull_request_opened',
        displayName: 'PR Opened',
        actions: actions
      }
    ];
    this.set('events', events);
  }

  generateTypeArray(KlassProto){
    let attrs = [];
    KlassProto.constructor.eachTransformedAttribute(
      (name, type) => {
        attrs.push({key:name, kind:type});
    });
    KlassProto.constructor.eachRelationship((key, {kind}) => {
      attrs.push({key, kind});
    });
    return attrs;
  }

  // @action
  // deleteRule(){
  //   get(this, 'rule').destroyRecord();
  // }
}
