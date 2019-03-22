import Route from '@ember/routing/route';

export default Route.extend({
  async setupController(controller) {
    this._super(...arguments);
    const repo = await this.store.findRecord('repo', this.paramsFor('repo').repo_id);
    const organisation = await this.store.findRecord('organisation', repo.get('organisation.id'));
    controller.set('repo', repo);
    controller.set('organisation', organisation);
  },
});
