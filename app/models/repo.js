import DS from 'ember-data';

export default DS.Model.extend({
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  name:      DS.attr('string'),
  states: DS.hasMany('states'),
  filters: DS.hasMany('filters'),
  pullRequests: DS.hasMany('pullRequest'),
  labels: DS.hasMany('labels'),
  workflows: DS.hasMany('workflows'),
  rules: DS.hasMany('rules', { defaultValue: () => { return []; } }),
});
