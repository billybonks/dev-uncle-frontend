import Component from '@ember/component';
import { action } from '@ember-decorators/object';
import { later, cancel } from '@ember/runloop';

export default class ActionApplyLabel extends Component {
  @action
  prevent() {
    return false;
  }

  @action
  open(dropdown) {
    if (this.closeTimer) {
      cancel(this.closeTimer);
      this.closeTimer = null;
    } else {
      dropdown.actions.open();
    }
  }

  @action
  closeLater(dropdown) {
    this.closeTimer = later(() => {
      this.closeTimer = null;
      dropdown.actions.close();
    }, 200);
  }
}
