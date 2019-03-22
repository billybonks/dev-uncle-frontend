import AbstractRoute from 'client/routes/repo/manage/abstract-route';

export default AbstractRoute.extend({
  model() {
    const repoId = this.paramsFor('repo').repo_id;
    return this.store.queryRecord('slackSetting', { repoId }).then((record) => {
      if (!record) {
        return this.store.createRecord('slackSetting');
      }
      return record;
    });
  },
  setupController(controller, model) {
    const repoId = this.paramsFor('repo').repo_id;
    this._super();
    this.store.findAll('slackOrganization').then((orgs) => {
      controller.set('slackOrgs', orgs);
    });
    this.store.findRecord('repo', repoId).then((repo) => {
      model.set('repo', repo);
      controller.set('repo', repo);
    });

    controller.set('filters', this.store.peekAll('filter'));

    this.store.query('slackNotification', { repo_id: repoId }).then(results => {
      controller.set('slackNotifications', results);
    });

    controller.set('model', model);
  },
});
