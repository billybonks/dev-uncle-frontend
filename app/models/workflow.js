import DS from 'ember-data';

export default DS.Model.extend({
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  name:      DS.attr('string'),
  rules: DS.hasMany('rules', { defaultValue: () => { return []; } }),
});