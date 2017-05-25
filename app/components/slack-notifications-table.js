import Component from 'ember-component';
import Table from 'ember-light-table';
import service from 'ember-service/inject';
import computed, { readOnly } from 'ember-computed-decorators';

export default Component.extend({
  direction: false,
  @computed('model.length')
  table(){
    return new Table(this.get('columns'), this.get('model'), {enableSync: true});
  },
  @readOnly
  @computed
  columns() {
    return [{
      label: 'Filter',
      valuePath: 'filter.name',
    },
    {
      label: 'Notification Time',
      valuePath: 'time',
    },
    {
      label: 'Target',
      valuePath: 'target',
    }];
  },
})
