import AbstractRoute from 'client/routes/repo/manage/abstract-route';

export default class RouteWorkflowNew extends AbstractRoute {
  async model(/*params*/) {
    let repo = await this.store.findRecord('repo', this.paramsFor('repo').repo_id);
    let workflow = this.store.createRecord('workflow');
    workflow.set('repo', repo);
    return {
      repo, workflow,
    };
  }
}
