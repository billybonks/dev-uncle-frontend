import Component from '@ember/component';
import Table from 'ember-light-table';
import { action, computed, readOnly } from 'ember-decorators/object';

export default class TablesDashboard extends Component {

  constructor(){
    super(...arguments);
    this.set('table', new Table(this.get('columns'), this.get('model'), {enableSync: true}));
  }
  @action
  onColumnClick(column){
    if(column.get('sortable')){
      this.set('sortBy',column.get('valuePath'));
      this.set('direction', column.get('ascending'));
    }
  }

  @readOnly
  @computed
  columns() {
    return [{
      label: 'Title',
      sortable: false,
      valuePath: 'linkInfo',
      cellComponent:'columns/pr-title',
    }, {
      label: 'Owner',
      valuePath: 'owner',
    }, {
      label: 'Repo',
      valuePath: 'repo.name'
    }];
  }

}
