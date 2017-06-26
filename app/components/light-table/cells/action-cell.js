import Cell from 'ember-light-table/components/cells/base';
import Changeset from 'ember-changeset';

export default Cell.extend({
  editAction:'edit',
  cancelAction:'cancel',
  saveAction:'save',
  actions:{
    edit(){
      this.sendAction('editAction');
    },
    cancel(){
      this.sendAction('cancelAction');
    },
    delete(){
      this.get('row.content').destroyRecord();
    },
    save(){
      this.sendAction('saveAction');
    }
  }
});
