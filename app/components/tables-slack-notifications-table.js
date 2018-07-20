import Component from '@ember/component';
import Table from 'ember-light-table';
import { computed } from '@ember-decorators/object';
import { action } from '@ember-decorators/object';

const TIME = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
const TYPE = ['overview', 'private', 'summary'];

export default class TablesSlackNotificationTable extends Component {
  direction = false

  constructor() {
    super(...arguments);
    this.set('table', new Table(this.get('columns')));
  }

  @computed('model.length')
  get filteredRows(){
    if(this.get('model')){
      let rows = this.get('model').rejectBy('isDeleted');
      this.get('table').setRows(rows);
      return rows;
    }
  }

  @computed
  get columns() {
    return [{
      label: 'Filter',
      draggable: true,
      valuePath: 'filter.name',
      //cellType: 'select-cell',
      collection: this.get('filters')
    },
    {
      label: 'Notification Time',
      draggable: true,
      valuePath: 'time',
      cellType: 'select-cell',
      collection: TIME
    },
    {
      label: 'Type',
      draggable: true,
      valuePath: 'type',
      cellType: 'select-cell',
      collection: TYPE
    },
    {
      label: 'Channel',
      draggable: true,
      valuePath: 'channel',
    },
    {
      label: 'Actions',
      cellType: 'action-cell'
    }];
  }

  @action
  deleteRow(row){
    row.content._content.destroyRecord().then(this.notifyRowsChanged.bind(this));
  }

  notifyRowsChanged(){
    this.notifyPropertyChange('filteredRows');
  }
}
