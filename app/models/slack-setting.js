import DS from 'ember-data';

export default DS.Model.extend({
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  slackOrganization: DS.belongsTo('slackOrganization'),
  organisation: DS.belongsTo('organisation'),
});
