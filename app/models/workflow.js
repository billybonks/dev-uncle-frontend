import DS from 'ember-data';

export default DS.Model.extend({
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  name: DS.attr('string'),
  active: DS.attr('boolean', { defaultValue: true }),
  organisation: DS.belongsTo('organisation', { inverse: null }),
  repos: DS.hasMany('repo'),
  repo: DS.belongsTo('repo', { inverse: null }),
  rules: DS.hasMany('rule'),
});
