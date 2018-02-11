import EditableTable from 'client/components/tables-editable-table';
import { computed } from 'ember-decorators/object';

export default EditableTable.extend({
  @computed
  get columns() {
    return [{
      label: 'Name',
      draggable: true,
      valuePath: 'name',
    },
    {
      label: 'Color',
      draggable: true,
      valuePath: 'color',
    },
    {
      label: 'Is-State-label',
      cellType: 'checkbox-cell',
      valuePath: 'isState',
    },{
      label: 'Actions',
      cellType: 'action-cell',
      deleteAble: false
    }];
  }
});
