import { underscore } from '@ember/string';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  keyForAttribute: function(attr/*, method*/) {
    return underscore(attr);
  },
  keyForRelationship: function(attr/*, method*/) {
    if(attr == 'labels'){
      return 'label_ids';
    }
    if(attr == 'rules'){
      return 'rules_id';
    }
    return `${underscore(attr)}_id`;
  },
});
