import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  keyForAttribute: function(attr, method) {
    return Ember.String.underscore(attr);
  },
  keyForRelationship: function(attr, method) {
    if(attr == 'slackOrganization'){
      return 'slack_organization_id';
    }
    if(attr == 'repo'){
      return 'repo_id';
    }
    if(attr == 'user'){
      return 'user_id';
    }
    return attr;
  }
});
