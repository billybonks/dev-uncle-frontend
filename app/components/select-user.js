import Component from '@ember/component';
import { service } from '@ember-decorators/service';


export default class UserSelect extends Component {
  @service users

  willInsertElement() {
    this.set('isLoading', true);
    const promise = this.users.findUsers(this.target);
    promise.then((res) => {
      this.set('isLoading', false);
      this.set('users', res);
    });
  }
}
