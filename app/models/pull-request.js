import EmberObject from '@ember/object';
import DS from 'ember-data';
import { computed } from 'ember-decorators/object';

export default DS.Model.extend({
  title:      DS.attr('string'),
  state:      DS.attr('string'),
  owner:      DS.attr('string'),
  onlineId:   DS.attr('string'),
  ownerLogin: DS.attr('string'),
  number:     DS.attr('number'),
  createdAt:  DS.attr('date'),
  updatedAt:  DS.attr('date'),
  repo:       DS.belongsTo('repo'),
  labels:     DS.hasMany('labels'),

  @computed('number','title', 'repo.name')
  linkInfo(){
    return EmberObject.create({
      title:this.get('title'),
      number: this.get('number'),
      repo: this.get('repo.name')
    });
  }
});
