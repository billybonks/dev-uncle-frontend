import Service from 'ember-service';
import computed from 'ember-computed';
import { task } from 'ember-concurrency';

export default Service.extend({
  repoId: null,
  ajax: Ember.inject.service(),
  store: Ember.inject.service(),
  labels: Ember.Object.create({}),
  loadLabels: task(function *() {
    let repoId = this.get('repoId');
    if(!this.hasLabels(repoId)){
      let data = yield this.get('store').query('label',{repo_id:repoId})
      let labels = data.content.map( (label) => {
        return label.record
      })
      this.setLabels(labels, repoId);
      this.notifyPropertyChange('repoId')
    }
  }),
  setLabels(labels, repoId){
    this.get('labels').set(repoId,labels);
  },
  getLabels(repoId){
    return this.get(`labels.${repoId}`)
  },
  hasLabels(repoId){
    return !!this.getLabels(repoId);
  },
  currentLabels: computed('repoId', function() {
    return this.get(`labels.${this.get('repoId')}`) || [];
  })
})
