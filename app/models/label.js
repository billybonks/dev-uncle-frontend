import DS from 'ember-data';

export default DS.Model.extend({
  state_id:  DS.attr('number'),
  name:      DS.attr('string'),
  online_id: DS.attr('number'),
  repo:      DS.belongsTo('repo'),
  color:     DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
