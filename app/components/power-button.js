import Component from '@glimmer/component';

export default class Button extends Component {
  click() {
    if (this.action) {
      this.action();
    } else {
      this.task.perform();
    }
  }
}
