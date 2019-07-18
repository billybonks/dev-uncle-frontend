import Service from '@ember/service';
import { computed } from '@ember/object';

export default class AutomationService extends Service {
  events = [{
    key: 'pull_request_synchronize',
    displayName: 'PR Code Updated',
    eventGroup: 'pullRequest',
  },
  {
    key: 'pull_request_rejected',
    displayName: 'Reviewer Requested Changes',
    eventGroup: 'pullRequest',
  },
  {
    key: 'pull_request_approved',
    displayName: 'Reviewer Approved Changes',
    eventGroup: 'pullRequest',
  },
  {
    key: 'pull_request_opened',
    displayName: 'PR Opened',
    eventGroup: 'pullRequest',
  },
  {
    key: 'branch_built',
    displayName: 'Branch CI has run',
    eventGroup: 'pullRequest',
  },
  ]

  actions = [{
    label: 'Apply Label',
    key: 'apply_label',
    editor: 'action-apply-label',
    eventGroup: 'pullRequest',
  },
  {
    label: 'Add Reviewer',
    key: 'add_reviwer',
    editor: 'action-add-reviewer',
    eventGroup: 'pullRequest',
  },
  ]

  properties = {
    labels: {
      type: 'association',
    },
    owner: {
      type: 'association',
    },
    title: {
      type: 'string',
    },
  }

  @computed('asd')
  get eventHash() {
    return this.events.reduce((acc, event) => {
      const actions = this.actions.filter(action => action.eventGroup === event.eventGroup);
      acc[event.key] = { ...event, actions };
      return acc;
    }, {});
  }
}
