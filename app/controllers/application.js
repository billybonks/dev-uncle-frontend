import Controller from 'ember-controller';
import service from 'ember-service/inject';
import { action } from 'ember-decorators/object';

export default Controller.extend({
  fixedHeader: service(),
});
