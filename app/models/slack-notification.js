import DS from 'ember-data';

export default DS.Model.extend({
  time:      DS.attr('number'),
  // interval:  DS.attr('string'),
  type:    DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  repo:      DS.belongsTo('repo'),
  filter:    DS.belongsTo('filter'),
});
