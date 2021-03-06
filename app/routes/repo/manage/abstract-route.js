import AbstractRoute from 'client/routes/abstract-route';

export default AbstractRoute.extend({
  title: 'Settings',
  controlsPath: 'fixed-controls/manage',
  setupController() {
    this._super(...arguments);
    this.set('controlsParams', this.paramsFor('repo').repo_id);
  },
});
