import RowComponent from 'ember-light-table/components/lt-row';
import Changeset from 'ember-changeset';

export default RowComponent.extend({
  init(){
    this._super(...arguments);
    let originalModel = this.get('row.content');
    let changeset =  new Changeset(originalModel);
    this.set('row.content', changeset);
  },
  actions:{
    edit(){
      this.set('row.isEditing', true);
    },
    cancel(){
      this.get('row.content').rollback();
      this.set('row.isEditing', false);
    },
    save(){
      this.get('row.content').save().then( () => {
        this.set('row.isEditing', false);
      });
    }
  }
});
