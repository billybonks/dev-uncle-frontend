import DS from 'ember-data';

export default DS.Model.extend({
  slackOrganization: DS.belongsTo('slackOrganization'),
  slackChannel: DS.attr('string'),
  repo: DS.belongsTo('repo'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
