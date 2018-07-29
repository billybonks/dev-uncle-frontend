import Component from '@ember/component';
import PullRequest from 'client/models/pull-request';

let actionHash = {
  apply_label: {
    label: 'Apply Label',
  },
  message_owner: {
    label: 'Owner',
  },
  message_reviewers: {
    label: 'Message Reviewers',
  },
  message_channel: {
    label: 'Message Channel',
  },
  message_last_commit: {
    label: 'Message Last Committer',
  },
};

const messageLastCommitter = {
  label: 'Message Last Committer',
  key: 'message_last_commit'
};
const applyLabel =  {
  label: 'Apply Label',
  key: 'apply_label',
  editor: 'apply-label-editor'
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
    //let actions = Object.keys('actionHash');
    let eventsHash = {
      pull_request_synchronize:{
        displayName: 'PR Code Updated',
        actions: actions
      },
      branch_built: {
        name:'',
        displayName: 'Branch CI has run',
        actions: [messageChannel, messageLastCommitter],
      },
      pull_request_rejected:{
        name:'',
        displayName: 'Reviewer Requested Changes',
        actions: actions
      },
      pull_request_approved:{
        name:'',
        displayName: 'Reviewer Approved Changes',
        actions: actions
      },
      pull_request_opened: {
        name:'',
        displayName: 'PR Opened',
        actions: actions
      }
    };
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
    this.set('eventsHash', eventsHash);
    this.set('actions', actionHash);
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
