import Cell from 'ember-light-table/components/cells/base';
import { computed } from '@ember-decorators/object';

export default class CheckboxCell extends Cell{
  @computed
  get value(){
    let changeSet = this.get('row.content');
    return changeSet.get(this.get('column.valuePath'));
  }

  set value(value){
    let changeSet = this.get('row.content');
    changeSet.set(this.get('column.valuePath'), value);
    return value;
  }
}
