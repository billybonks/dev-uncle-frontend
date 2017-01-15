import Ember from 'ember';
import service from 'ember-service/inject';
import AbstractRoute from "client/routes/repo/manage/abstract-route";

export default AbstractRoute.extend({
  model(params){
    let repoId = this.paramsFor('repo').repo_id;
    return this.store.queryRecord('slackSetting', {repoId}).then( (record) => {
      if(!record){
        return this.store.createRecord('slackSetting');
      }
      return record;
    });
  },
  setupController(controller, model){
    this._super();
    let repo = this.store.findRecord('repo', this.paramsFor('repo').repo_id).then( (repo) => {
      model.set('repo', repo)
    });
    controller.set('model', model);
  }
});
