import DS from 'ember-data';

export default DS.Model.extend({
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  name:      DS.attr('string'),
  hook_id: DS.attr(),
  user_id: DS.attr(),
  states: DS.hasMany('states'),
  pullRequests: DS.hasMany('pullRequest'),
  labels: DS.hasMany('labels'),
  members: DS.hasMany('repoMember')
});
