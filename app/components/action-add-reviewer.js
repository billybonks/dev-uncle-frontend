import Component from '@ember/component';
import { action } from '@ember-decorators/object';
import { service } from '@ember-decorators/service';

export default class ActionAddReviewer extends Component {
  @service store;

  constructor(){
    super(...arguments);

    let usersRaw = this.data? (this.data.users || []) : [];
    let userPromises = usersRaw.map((userId) => {
      return this.store.find('user', userId);
    });
    Promise.all(userPromises).then( (users) => {
      this.set('hydratedUsers', users);
    });
  }

  @action
  onchange(value) {
    this.set('hydratedUsers', value);
    let userIds = this.hydratedUsers.map((user) => {
      return user.get('id');
    });
    this.onUpdated({users: userIds});
  }
}
