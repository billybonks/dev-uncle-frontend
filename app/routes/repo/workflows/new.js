import AbstractRoute from 'client/routes/repo/manage/abstract-route';

export default class RouteWorkflowNew extends AbstractRoute {
  async model() {
    this.repo = await this.store.findRecord('repo', this.paramsFor('repo').repo_id);
    const workflow = this.store.createRecord('workflow');
    workflow.set('repo', this.repo);
    return workflow;
  }

  async setupController(controller, model) {
    super.setupController(controller, model);
    controller.set('model', model);
    controller.set('repo', this.repo);
  }
}
