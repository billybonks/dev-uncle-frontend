import Component from 'ember-component';
import Computed from 'ember-computed';
import moment from 'moment';

export default Component.extend({
  tagName:'span',
  dateObject: Computed('date', function(){
    return moment(this.get('date')).add(8,'hours')
    return new Date();
  })
})
