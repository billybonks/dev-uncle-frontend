import Component from '@ember/component';
import Table from 'ember-light-table';
import { computed, action } from '@ember-decorators/object';

export default class TablesEditableTable extends Component {
  direction = false

  constructor() {
    super(...arguments);
    this.set('defaultColumns', [{
      label: 'Actions',
      cellType: 'action-cell'
    }]);
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

  @action
  deleteRow(row){
    row.content._content.destroyRecord().then(function(){
      this.notifyPropertyChange('filteredRows');
    });
  }

};
