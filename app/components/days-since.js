import Component from 'ember-component';
import Computed from 'ember-computed';
import moment from 'moment';

export default Component.extend({
  tagName:'span',
  dateObject: Computed('value', function(){
    return moment(this.get('value')).add(8,'hours');
  })
});
