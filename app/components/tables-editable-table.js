import Component from 'ember-component';
import Table from 'ember-light-table';
import { computed } from 'ember-decorators/object';

export default Component.extend({
  direction: false,
  init(){
    this._super(...arguments);
    this.set('defaultColumns', [{
      label: 'Actions',
      cellType: 'action-cell'
    }]);
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
  actions:{
    deleteRow(row){
      row.content._content.destroyRecord().then(function(){
        this.notifyPropertyChange('filteredRows');
      });
    }
  }
});
