import AbstractRoute from "client/routes/abstract-route";

export default AbstractRoute.extend({
  title: 'Pull Requests',
  controlsPath: 'fixed-controls-stats',
  model(/*params*/){
    return this.store.query('pullRequest',{repo_id:this.paramsFor('repo').repo_id});
  },

  setupController(controller, model){
    controller.set('model', model);
    this.set('controlsParams', this.paramsFor('repo').repo_id);
    controller.set('repo', this.store.findRecord('repo', this.paramsFor('repo').repo_id));
  }
});
