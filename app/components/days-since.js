import Component from 'ember-component';
import { computed } from 'ember-decorators/object';
import moment from 'moment';

export default Component.extend({
  tagName:'span',

  @computed('value')
  dateObject(){
    return moment(this.get('value')).add(8,'hours');
  }
});
