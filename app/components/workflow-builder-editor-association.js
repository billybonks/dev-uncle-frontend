import Component from '@ember/component';
import get from "ember-metal/get";
import set from "ember-metal/set";
import { action, computed } from 'ember-decorators/object';

export default class WorkflowBuilderEditorAssociation extends Component {
  idPath = 'id'

  constructor(){
    super(...arguments);
    let key = get(this, 'key');
    let options = get(this, 'options');
    if(key){
      set(this, 'selectionId', get(this, `stepData.${key}`));
    }
    if(options){
      let selectedObject = options.findBy(get(this, 'idPath'), get(this, 'selectionId'));
      set(this, 'selectedObject', selectedObject);
    }

  }

  @action
  selectionChanged(object){
    let data = null;
    let id = get(this, `selectedObject.${get(this, 'idPath')}`);
    let key = get(this, 'key');
    if(key) {
      data = {};
      data[get(this, 'key')] = id;
    } else {
      data = id;
    }
    get(this, 'stepDataChanged')(data);
    set(this, 'selectedObject', object);

  }
}