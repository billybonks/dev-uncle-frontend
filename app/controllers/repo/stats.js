import Controller from 'ember-controller';
import service from 'ember-service/inject';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  states: service(),
  pullRequests: alias('model'),
});
