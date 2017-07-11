import service from 'ember-service/inject';
import AbstractRoute from "client/src/ui/routes/repo/manage/abstract-route";

export default AbstractRoute.extend({
  ajax: service(),
  model(/*params*/){
    return this.store.findRecord('repo', this.paramsFor('repo').repo_id);
  },
  setupController(controller, model){
    this._super();
    controller.set('model', model);
    controller.set('repo', model);
  }
});
