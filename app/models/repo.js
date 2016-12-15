import DS from 'ember-data';

export default DS.Model.extend({
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  name:      DS.attr('string'),
  slack_organization_id: DS.attr(),
  hook_id: DS.attr(),
  user_id: DS.attr()
});
