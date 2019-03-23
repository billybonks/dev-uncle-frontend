import Service, { inject } from '@ember/service';

export default Service.extend({
  store: inject(),
  init() {
    this._super(...arguments);
    this.repoUsers = new Map();
    this.orgUsers = new Map();
  },
  query(params) {
    return this.store.query('user', params);
  },
  async findUsers(repo) {
    const repoId = repo.get('id');
    const organisationId = repo.get('organisation.id');
    const repoUsers = await this.findRepoMembers(repoId);
    const orgUsers = await this.findOrganisationMembers(organisationId);
    return Array.from(new Set([...repoUsers, ...orgUsers]));
  },
  async findRepoMembers(repoId) {
    if (this.repoUsers.has(repoId)) {
      return this.repoUsers.get(repoId);
    }
    const users = await this.query({
      repoId,
    });
    return users.toArray();
  },
  async findOrganisationMembers(organisationId) {
    if (this.orgUsers.has(organisationId)) {
      return this.orgUsers.get(organisationId);
    }
    const users = await this.query({
      organisationId,
    });
    return users.toArray();
  },
});
