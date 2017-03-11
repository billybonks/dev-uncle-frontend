import DS from 'ember-data';

export default DS.Model.extend({
  githubUser: DS.attr('string'),
  access: DS.attr('boolean'),
  repo:   DS.belongsTo('repo'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
