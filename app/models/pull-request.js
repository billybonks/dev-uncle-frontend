import EmberObject from '@ember/object';
import { attr, belongsTo, hasMany } from '@ember-decorators/data';
import { computed } from '@ember-decorators/object';
import DS from 'ember-data';

export default class PullRequest extends DS.Model {
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
