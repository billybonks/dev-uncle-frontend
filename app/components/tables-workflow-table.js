import Component from '@ember/component';
import { action } from '@ember-decorators/object';

export default class TablesWorkflowTable extends Component {


  columns = [
    { name: 'Name', valuePath: 'name', cellComponent: 'columns-workflow-link' },
    { name: 'Actions', sortable: false, cellComponent: 'columns-destroy-action-cell' },
  ]

  sorts = [
    {
      valuePath: 'name',
      isAscending: false,
    },
  ]


  @action
  deleteRow(row) {
    return row.destroyRecord();
  }

  @action
  deactivateRow(row) {
    row.set('active', false);
    return row.save();
  }

  @action
  activateRow(row) {
    row.set('active', true);
    row.save();
  }
}
