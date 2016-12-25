import Controller from "ember-controller";
import FormControllerWithEmbeddedChildrenMixin from 'App/controllers/concerns/form-controller-with-embedded-children';
import prelimNumberMixin from 'App/controllers/concerns/prelim-number-mixin';
import NonProxyValidationsMixin from 'App/controllers/concerns/non-proxy-validations-mixin';

export default Controller.extend(FormControllerWithEmbeddedChildrenMixin, prelimNumberMixin, NonProxyValidationsMixin,{
  needs: ["locations"],
  extendValidationsFrom: App.StockTransfer,
  flashText: Ember.computed.prefix("adjustmentNumber", "Stock Transfer #"),
  // Override FormControllerWithEmbeddedChildrenMixin to remove new items
  beforeValidations() {
    this._super.apply(this, arguments);
    Ember.RSVP.all(this.get('model.children').filterBy('hasNoData').invoke('deleteRecord'));
  },

  // Override FormControllerWithEmbeddedChildrenMixin to add in deleted records
  beforeSave() {
    let deleted = this.get('model.deletedChildren').rejectBy('isNew');
    this.set('model.embeddedLineItems', this.get('model.children').toArray().concat(deleted));
  },

  availableDestinationLocations:  Ember.computed.append("controllers.locations.stockLocations", "destinationLocation"),
  availableSourceLocations:       Ember.computed.append("controllers.locations.stockLocations", "sourceLocation"),
});
