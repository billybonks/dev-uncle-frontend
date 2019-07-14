import Component from '@ember/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ActionAddReviewer extends Component {
  @service store;

  init() {
    super.init(...arguments);
    const usersRaw = this.data ? (this.data.users || []) : [];
    const userPromises = usersRaw.map(userId => this.store.find('user', userId));
    Promise.all(userPromises).then((users) => {
      this.set('hydratedUsers', users);
    });
  }

  @action
  onchange(value) {
    this.set('hydratedUsers', value);
    const userIds = this.hydratedUsers.map(user => user.get('id'));
    this.onUpdated({ users: userIds });
  }
}
