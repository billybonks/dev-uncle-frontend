import Component from 'ember-component';
import computed from 'ember-computed';
import { task } from 'ember-concurrency';
import service from 'ember-service/inject';

export default Component.extend({
  states: service(),
  stateMappings: computed('labels',{
    get(){
      let mappings = {}
      this.get('states.states').map( (state) => {
        let label = this.get('states').findLabel(state.id,this.get('labels'));
        mappings[state.id] = {label:label, state:state, isDirty:false};
      })
      return mappings
    },
    set(_, value){
      let mappings = this.get('stateMappings');
      value.isDirty = true;
      mappings[value.state.id] = value;
      this.notifyPropertyChange('stateMappings')
      return mappings;
    }
  }),
  availableLabels:computed('labels', 'stateMappings',function(){
    let usedIds = Object.keys(this.get('stateMappings')).map((key) => {
      if(this.get(`stateMappings`)[key].label){
        return this.get(`stateMappings`)[key].label.id;
      }
    });
    usedIds = usedIds.filter((id)=>{
      if(id){
        return id
      }
    })
    let labels = this.get('labels').filter((label) => {
      if(!usedIds.includes(label.get('id'))){
        return label
      }
    })
    return labels;
  }),
  actions:{
    changeLabelState(state,label){
      this.set('stateMappings',{state:state,label:label})
    },
    save(){
      let stateMappings = Object.keys(this.get('stateMappings')).map((key) => {
        let state = this.get(`stateMappings`)[key]
        if( state.label && state.isDirty){
         return this.get(`stateMappings`)[key];
        }
      });
      stateMappings = stateMappings.filter((label)=>{
        if(label){
          return label
        }
      })
      this.get('save').perform(stateMappings)
    }
  }
});
