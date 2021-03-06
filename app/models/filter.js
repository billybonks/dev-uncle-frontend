import DS from 'ember-data';

export default DS.Model.extend({
  filters: DS.attr({ defaultValue() { return {}; } }),
  name: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  repo: DS.belongsTo('repo'),
});
