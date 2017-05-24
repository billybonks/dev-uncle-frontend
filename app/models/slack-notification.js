import DS from 'ember-data';

export default DS.Model.extend({
  repo:      DS.belongsTo('repo'),
  filter:    DS.belongsTo('filter'),
  time:      DS.attr('number'),
  // interval:  DS.attr('string'),
  target:    DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
