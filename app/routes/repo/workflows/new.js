import AbstractRoute from 'client/routes/repo/manage/abstract-route';

export default class RouteWorkflowNew extends AbstractRoute {
  async model() {
    const repo = await this.store.findRecord('repo', this.paramsFor('repo').repo_id);
    const workflow = this.store.createRecord('workflow');
    workflow.set('repo', repo);
    return {
      repo, workflow,
    };
  }
}
