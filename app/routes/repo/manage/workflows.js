import AbstractRoute from "client/routes/repo/manage/abstract-route";

export default AbstractRoute.extend({
  async model(/*params*/){
    let repo = await this.store.findRecord('repo', this.paramsFor('repo').repo_id);
    return {
      workflows: await this.store.query('workflow', {repo_id: this.paramsFor('repo').repo_id}),
      repo,
    };
  },
});
