import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  keyForAttribute: function(attr, method) {
    return Ember.String.underscore(attr)
  },
  keyForRelationship: function(attr, method) {
    if(attr == 'repo'){
      return 'repo_id'
    }
    return attr
  }
});
