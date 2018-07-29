import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';
import { service } from '@ember-decorators/service';

export default class MembersComponent extends Controller {
  @service store;

  columns = [
    { name: 'Username', valuePath: 'user.githubUser'},
    { name: 'Access', valuePath: 'access'},
  ]

  sorts = [
    {
      valuePath: 'owner',
      isAscending: false,
    }
  ]

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
