import { inject as service } from '@ember/service';
import AbstractRoute from "client/routes/repo/manage/abstract-route";

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
