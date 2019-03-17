import AbstractRoute from "client/routes/repo/manage/abstract-route";

export default class RouteWorkflowNew extends AbstractRoute {
  beforeModel(){
    let organisation = this.modelFor('organisation');
    this.organisation = organisation;
  }

  async model(/*params*/){
    let workflow = this.store.createRecord('workflow');
    return workflow;
  }

  setupController(controller, model) {
     controller.model = model;
     controller.workflow = model;
     controller.organisation = this.organisation;
   }
}
