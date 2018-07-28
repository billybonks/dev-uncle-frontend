import DS from 'ember-data';

export default DS.Model.extend({
  rules:      DS.attr(),
  conditions: DS.attr({defaultValue() { return [{}];}}),
  event:      DS.attr('string'),
  createdAt:  DS.attr('date'),
  updatedAt:  DS.attr('date'),
  repo:       DS.belongsTo('repo'),
});
