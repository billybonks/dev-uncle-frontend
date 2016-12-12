import Component from 'ember-component';
import computed from 'ember-computed';
import Ember from 'ember';
export default Component.extend({
  states: Ember.inject.service(),
  label:computed('labels', function(){
    return this.get('states')[this.get('name')](this.get('labels'));
  }),
  filteredPullRequests:computed('pullRequests', 'label', function () {
    if(this.get('label')){
    return this.get('pullRequests').filter( pr => {
      return pr.labels.findBy('id', parseInt(this.get('label').online_id))
    })
  } else {
    return [];  
  }
  })
})
