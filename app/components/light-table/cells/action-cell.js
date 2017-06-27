import Cell from 'ember-light-table/components/cells/base';

export default Cell.extend({
  init(){
    this._super(...arguments);
    //protects againts undefined
    if(this.get('column.deleteAble') === false){
      this.set('deleteAble' ,false);
    }
  },
  editAction: 'edit',
  cancelAction: 'cancel',
  saveAction: 'save',
  deleteAble: true,
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
