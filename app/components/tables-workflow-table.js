import Component from '@ember/component';
import Table from 'ember-light-table';
import { computed, readOnly, action } from 'ember-decorators/object';

export default class TablesWorkflowTable extends Component{
  constructor(){
    super(...arguments);
    this.set('table', new Table(this.get('columns'), this.get('rows'), {enableSync: true}));
    this.set('sortBy', 'name');
    this.set('direction', false);
  }

  @readOnly
  @computed
  columns() {
    return [{
      label: 'Name',
      sortable: false,
      valuePath: 'name',
      cellComponent:'columns/workflow-link',
    },
  {
    label: 'Actions',
    cellComponent: 'columns/destroy-action-cell'
  }];
  }

  @action
  onColumnClick(column){
    if(column.get('sortable')){
      this.set('sortBy',column.get('valuePath'));
      this.set('direction', column.get('ascending'));
    }
  }

  @action
  deleteRow(row){
    let model = row.content._content || row.content;
    model.destroyRecord().then(function(){
      this.notifyPropertyChange('filteredRows');
    });
  }

  @action
  deactivateRow(row){
    let model = row.content;
    model.set('active', false);
    model.save();
  }

  @action
  activateRow(row){
    let model = row.content;
    model.set('active', true);
    model.save();
  }
}
