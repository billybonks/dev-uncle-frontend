import DS from 'ember-data';

export default DS.Model.extend({
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  name:      DS.attr('string'),
  filters: DS.hasMany('filters'),
  pullRequests: DS.hasMany('pullRequest'),
  labels: DS.hasMany('labels'),
  workflows: DS.hasMany('workflows'),
  organisation: DS.belongsTo('organisation'),
  rules: DS.hasMany('rules', { defaultValue: () => { return []; } }),
});
