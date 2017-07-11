import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  repo:   DS.belongsTo('repo'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});



//Food4gab1701
