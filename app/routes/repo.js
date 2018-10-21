import AbstractRoute from "client/routes/abstract-route";

export default AbstractRoute.extend({
  model(params){
    return this.get('store').find('repo', params.repo_id);
  },
  afterModel(repo){
    this.ensureRecord(repo, 'rule');
    this.ensureRecord(repo, 'filter');
    this.ensureRecord(repo, 'label');
  }
});
