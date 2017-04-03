import DS from 'ember-data';

export default DS.Model.extend({
  filters:   DS.attr('json'),
  name:      DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
