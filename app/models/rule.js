import DS from 'ember-data';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

const {
 Model, attr, belongsTo,
} = DS;

export default class Rule extends Model {
  @service automation;
  @attr('string') event;
  @attr('date') createdAt;
  @attr('date') updatedAt;
  @attr() rules;
  @attr({ defaultValue() { return [{}]; } }) conditions;
  @belongsTo('repo') repo;
  @belongsTo('organisation') organisation;

  @computed('event')
  get eventSchema() {
    return this.automation.eventHash[this.get('event')];
  }

  @computed('rules.action', 'eventSchema')
  get actionSchema() {
    return this.automation.actions.find(action => action.key === this.get('rules.action'));
  }
}
