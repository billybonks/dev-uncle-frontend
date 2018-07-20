import Component from '@ember/component';
import Table from 'ember-light-table';
import { computed, action } from '@ember-decorators/object';
import { service } from '@ember-decorators/service';

export default class TablesMemberTable extends Component {
  @service store;

  sortBy = 'updated_at'
  direction = false

  constructor(){
    super(...arguments);
    this.set('table', new Table(this.get('columns'), this.get('model'), {enableSync: true}));
  }

  @computed
  get columns() {
    return [{
      label: 'Username',
      valuePath: 'user.githubUser',
    }, {
      label: 'Access',
      valuePath: 'access',
      ortable: false
    }];
  }

  @action
  onColumnClick(column) {
    if(column.get('sortable')){
      this.set('sortBy',column.get('valuePath'));
      this.set('direction', column.get('ascending'));
    }
  }

  @action
  addMember() {
    let newMember = this.get('store').createRecord('repoMember',{
      githubUser:this.get('newMember'),
      access:true,
      repo:this.get('repo')
    });
    newMember.save();
  }
}
