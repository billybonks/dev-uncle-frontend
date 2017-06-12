import Ember from 'ember';
import Component from 'ember-component';
import computed from 'ember-computed-decorators';

export default Component.extend({

  @computed('rule.event')
  editor(){
    return `editors/rules/${Ember.String.dasherize(this.get('rule.event'))}`;
  }
});
