import SingleStepBuilder from 'client/components/workflow-builder-step-single';
import EmberObject from '@ember/object';
import { get } from '@ember/object';
import { set } from '@ember/object';
import { action } from 'ember-decorators/object';

export default class StepConditional extends SingleStepBuilder {
  constructor(){
    super(...arguments);
    set(this, 'comparatorArray', comparatorArray);
    set(this, '_comparator', get(this, 'comparator'));
  }

  @action
  changeStep({step, data}){
    set(this, '_step', step);
    set(this, '_stepData', data);
    this.updateStep();
  }

  @action
  changeConditionType(comparator) {
    set(this, '_comparator', comparator);
    //computed on _comparator did not work well
    set(this, 'editorName', get(comparator, 'editor'));
    this.updateStep();
  }

  buildUpdatePayload(){
    return {
      step: get(this, '_step'),
      data: get(this, '_stepData'),
      comparator: get(this, '_comparator')
    };
  }
}

let comparators = {
  hasMany:{
     "==":"association",
     "!=":"association",
     "in?":"multi-association",
     "not_in?":"multi-association"
  },
  belongsTo:{
     "==":"association",
     "!=":"association",
  },
  number:{
     "==":"number",
     "!=":"number",
     ">":"number",
     ">=":"number",
     "<":"number",
     "<=":"number"
  },
  date:{
     "==":"date",
     "!=":"date",
     ">":"date",
     ">=":"date",
     "<":"date",
     "<=":"date"
  },
  array:{
   "include?":"text",
   "exclude?":"text"
  },
  string:{
     "==":"text",
     "!=":"text",
     "in?":"tags",
     "not_in?":"tags",
     "blank?":"boolean",
     "present?":"boolean"
  },
};


let comparatorArray = Object.keys(comparators).reduce(function(acc, key){
    let comparisionSet = comparators[key];
    let objectified = Object.keys(comparisionSet).map(function(key){
       return EmberObject.create({key:key, editor: comparisionSet[key]});
    });
    acc[key] = objectified;
    return acc;
}, {});
