import Cell from 'ember-light-table/components/cells/base';
import computed, {alias} from 'ember-computed';

export default Cell.extend({
  init(){
    this._super(...arguments);
  },
  actions: {
    valueSelected(value){
      let changeSet = this.get('row.content');
      changeSet.set(this.get('column.valuePath'), value);
    }
  }
});
