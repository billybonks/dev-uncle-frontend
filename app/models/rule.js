import DS from 'ember-data';
import { attr, belongsTo } from '@ember-decorators/data';

const { Model } = DS;

export default class Rule extends Model {
  @attr('string') event;
  @attr('date') createdAt;
  @attr('date') updatedAt;
  @attr() rules;
  @attr('number', { defaultValue() { return [{}]; } }) conditions;
  @belongsTo('repo') repo;
}
