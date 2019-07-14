import Component from '@ember/component';
import { inject as service } from '@ember/service';


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
