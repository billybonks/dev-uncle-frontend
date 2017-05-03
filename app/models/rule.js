import DS from 'ember-data';

export default DS.Model.extend({
  rules:     DS.attr(),
  repo:      DS.belongsTo('repo'),
  event:     DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
