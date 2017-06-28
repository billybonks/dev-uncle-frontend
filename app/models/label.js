import DS from 'ember-data';

export default DS.Model.extend({
  isState:   DS.attr('boolean'),
  name:      DS.attr('string'),
  online_id: DS.attr('number'),
  repo:      DS.belongsTo('repo'),
  color:     DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
