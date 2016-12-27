import DS from 'ember-data';

export default DS.Model.extend({
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  name:      DS.attr('string'),
  hook_id: DS.attr(),
  user_id: DS.attr(),
  pullRequests: DS.hasMany('pullRequest')
});
