import DS from 'ember-data';
import EmberObject, { computed } from '@ember/object';

const {
 Model, attr, hasMany, belongsTo,
} = DS;

export default class PullRequest extends Model {
  @attr('string') title;
  @attr('string') state;
  @attr('string') owner;
  @attr('string') onlineId;
  @attr('string') ownerLogin;
  @attr('number') number;
  @attr('date') createdAt;
  @attr('date') updatedAt;
  @hasMany labels;
  @belongsTo repo;

  @computed('number', 'title', 'repo.name')
  get linkInfo() {
    return EmberObject.create({
      title: this.get('title'),
      number: this.get('number'),
      repo: this.get('repo.name'),
    });
  }
}
