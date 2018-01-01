import Component from '@ember/component';
import PullRequest from 'client/models/pull-request';

const actions = [
  {
    label: 'Apply Label',
    key: 'apply_label',
    editor: 'association'
  },
  {
    label: 'Message Reviewers',
    key: 'message_reviewers'
  },
  {
    label: 'Message Owner',
    key: 'message_owner'
  },
  {
    label: 'Message Channel',
    key: 'message_channel',
    editor: 'text'
  }
];

export default class AutomationBuilder extends Component {
  events = [
    {
      name:'pull_request_synchronize',
      displayName: 'PR Code Updated',
      actions: actions
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

  constructor(){
    super(...arguments);
    let prTypes = this.generateTypeArray(PullRequest.prototype);
    this.get('events').forEach( (event) => {
      event.attributes = prTypes;
    });
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
