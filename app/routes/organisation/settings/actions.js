import Route from '@ember/routing/route';

export default class OrganisationSettingsWorkflowsRoute extends Route {
  beforeModel(){
    let organisation = this.modelFor('organisation');
    this.organisation = organisation;
  }
  model(){
    return this.store.query('rule', {organisation_id: this.organisation.id});
  }
  setupController(controller, model) {
     controller.model = model;
     controller.workflows = model;
     controller.organisation = this.organisation;
   }
}
