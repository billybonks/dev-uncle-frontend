import Component from 'ember-component';
import Table from 'ember-light-table';
import { computed, readOnly } from 'ember-decorators/object';

const TIME = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
const TARGET = ['global', 'private'];

export default Component.extend({
  direction: false,
  init(){
    this._super(...arguments);
    this.set('table', new Table(this.get('columns')));
  },
  @computed('model.length')
  filteredRows(){
    if(this.get('model')){
      let rows = this.get('model').rejectBy('isDeleted');
      this.get('table').setRows(rows);
      return rows;
    }
  },
  @readOnly
  @computed
  columns() {
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
      label: 'Target',
      draggable: true,
      valuePath: 'target',
      cellType: 'select-cell',
      collection: TARGET
    },{
      label: 'Actions',
      cellType: 'action-cell'
    }];
  },
  actions:{
    deleteRow(row){
      row.content._content.destroyRecord().then(function(){
        this.notifyPropertyChange('filteredRows');
      });
    }
  }
});
