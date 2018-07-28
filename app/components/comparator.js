import Component from '@ember/component';
import { action } from '@ember-decorators/object';

export default class FiltersFilterBuilder extends Component {
  comparators = {
    hasMany: ['==', '!=','in?','not_in?'],
    string:['==', '!=', 'in?', 'not_in?', 'blank?', 'present?'],
    }

    @action
    onPropertyChange() {

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
//   string:{
//      "==":"text",
//      "!=":"text",
//      "in?":"tags",
//      "not_in?":"tags",
//      "blank?":"boolean",
//      "present?":"boolean"
//   },
// };
