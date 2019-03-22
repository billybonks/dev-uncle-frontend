import Component from '@ember/component';
import { computed } from '@ember-decorators/object';

export default class FiltersFilterBuilder extends Component {
  comparators = {
    string: [
      {
        key: "contains",
        component: "text",
      },
      {
        key: "==",
        component: "text",
      },
      {
        key: "!=",
        component: "text",
      },
      {
        key: "in?",
        component: "tags",
      },
      {
        key: "not_in?",
        component: "tags",
      },
    ],
    association: [
      {
        key: "contains",
        component: "text",
      },
      {
        key: "==",
        component: "association",
      },
      {
        key: "!=",
        component: "association",
      },
      {
        key: "in?",
        component: "association",
      },
      {
        key: "not_in?",
        component: "association",
      },
    ],
  }

  @computed('comparator', 'comparatorOptions.[]')
  get selectedComparator() {
    if (this.comparator) {
      return this.comparatorOptions.findBy('key', this.comparator);
    }
    return null;
  }



  @computed('selectedProperty')
  get comparatorOptions() {
    return this.comparators[this.selectedProperty.type];
  }

  @computed('property')
  get selectedProperty() {
    return this.propertyDetails[this.property];
  }
}
//
// let comparators = {
//   hasMany:{
//      "==":"association",
//      "!=":"association",
//      "in?":"multi-association",
//      "not_in?":"multi-association"
//   },
//   belongsTo:{
//      "==":"association",
//      "!=":"association",
//   },
//   number:{
//      "==":"number",
//      "!=":"number",
//      ">":"number",
//      ">=":"number",
//      "<":"number",
//      "<=":"number"
//   },
//   date:{
//      "==":"date",
//      "!=":"date",
//      ">":"date",
//      ">=":"date",
//      "<":"date",
//      "<=":"date"
//   },
//   array:{
//    "include?":"text",
//    "exclude?":"text"
//   },

// };
