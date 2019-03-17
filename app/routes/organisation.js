import Route from '@ember/routing/route';

export default class OrganisationRoute extends Route {
  async model(params){
    debugger
    return this.store.findRecord('organisation', params.id);
  }
}
