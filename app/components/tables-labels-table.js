import EditableTable from 'client/components/tables-editable-table';
import { computed, readOnly } from 'ember-decorators/object';

export default EditableTable.extend({
  @readOnly
  @computed
  columns() {
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
