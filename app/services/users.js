import Service from '@ember/service';
import { inject } from '@ember/service';

export default Service.extend({
  store: inject(),
  init(){
    this._super(...arguments);
    this.repoUsers = new Map();
    this.orgUsers = new Map();
  },
  query(params){
    return this.store.query('user', params);
  },
  async findUsers(repo){
    let repoId = repo.get('id');
    let organisationId = repo.get('organisation.id');
    let repoUsers = await this.findRepoMembers(repoId);
    let orgUsers = await this.findOrganisationMembers(organisationId);
    return Array.from(new Set([...repoUsers, ...orgUsers]));
  },
  async findRepoMembers(repoId){
    if(this.repoUsers.has(repoId)){
       return this.repoUsers.get(repoId);
    }
    let users = await this.query({
      repoId: repoId
    });
    return users.toArray();
  },
  async findOrganisationMembers(organisationId){
    if(this.orgUsers.has(organisationId)){
       return this.orgUsers.get(organisationId);
    }
    let users = await this.query({
      organisationId: organisationId
    });
    return users.toArray();
  }
});
