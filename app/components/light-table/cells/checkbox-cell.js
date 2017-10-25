import Cell from 'ember-light-table/components/cells/base';
import computed from 'ember-computed-decorators';
export default Cell.extend({
  init(){
    this._super(...arguments);
  },
  @computed
  value:{
    get(){
      let changeSet = this.get('row.content');
      return changeSet.get(this.get('column.valuePath'));
    },
    set(value){
      let changeSet = this.get('row.content');
      changeSet.set(this.get('column.valuePath'), value);
      return value;
    }
  }
});
