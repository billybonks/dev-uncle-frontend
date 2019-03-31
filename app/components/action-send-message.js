import Component from '@ember/component';
import { action, computed } from '@ember-decorators/object';

export default class ActionApplyLabel extends Component {
  targets = [{ name: 'Channel', key: 'channel' }, { name: 'User', key: 'user' }]
  config = { target: 'channel' }

  didReceiveAttrs() {
    super.didReceiveAttrs(...arguments);
    if (this.data) {
      this.config = this.data;
    }
  }

  @computed('data.target')
  get _target() {
    return this.targets.find(entry => entry.key === this.config.target);
  }

  @action
  targetChanged(target) {
    this.set('config.target', target.key);
    this.set('config.channel', null);
    this.set('config.user', null);
    this.onUpdated(this.config);
  }

  @action
  channelUpdated(event) {
    this.set('config.channel', event.target.value);
  }

  @action
  messageUpdated(event) {
    this.set('config.message', event.target.value);
    this.onUpdated(this.config);
  }
}
