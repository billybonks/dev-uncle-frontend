import Component from '@ember/component';

const messageLastCommitter = {
  label: 'Message Last Committer',
  key: 'message_last_commit',
};
const applyLabel = {
  label: 'Apply Label',
  key: 'apply_label',
  editor: 'action-apply-label',
};

const addReviewer = {
  label: 'Add Reviewer',
  key: 'add_reviwer',
  editor: 'action-add-reviewer',
};

const messageReviewers = {
  label: 'Message Reviewers',
  key: 'message_reviewers',
  };

const messageOwner = {
  label: 'Message Owner',
  key: 'message_owner',
};

const messageChannel= {
  label: 'Message Channel',
  key: 'message_channel',
  editor: 'text',
};

const actions = [applyLabel, addReviewer, messageReviewers, messageOwner, messageChannel];

let eventsHash = {
  pull_request_synchronize: {
    displayName: 'PR Code Updated',
    actions: actions,
  },
  branch_built: {
    name: '',
    displayName: 'Branch CI has run',
    actions: [messageChannel, messageLastCommitter],
  },
  pull_request_rejected: {
    name: '',
    displayName: 'Reviewer Requested Changes',
    actions: actions,
  },
  pull_request_approved: {
    name: '',
    displayName: 'Reviewer Approved Changes',
    actions: actions,
  },
  pull_request_opened: {
    name: '',
    displayName: 'PR Opened',
    actions: actions,
  },
};

export default class AutomationBuilder extends Component {

  constructor() {
    super(...arguments);
    this.set('eventsHash', eventsHash);
    this.set('properties', {
      labels: {
        type: 'association',
      },
      owner: {
        type: 'association',
      },
      title: {
        type: 'string',
      },
    });
  }
}
