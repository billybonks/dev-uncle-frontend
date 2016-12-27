import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize: function(serialized, options) {
    return serialized;
  },
  serialize: function(deserialized, options) {
    return deserialized
  }
});
