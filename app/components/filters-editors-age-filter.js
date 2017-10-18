import Component from 'ember-component';

export default Component.extend({
  actions: {
    updateFilter(value) {
      this.set('value', value)
      this.sendAction('action',this.get('filter'), value);
    }
  }
});
