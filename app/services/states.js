import Service from 'ember-service';

export default Service.extend({
   states:[
    {id:1,name:'review',description:'pull request requires review'},
    {id:2,name:'revision',description:'pull request requires revision'},
    {id:3,name:'hold',description:'pull request not being worked on'},
    {id:4,name:'complete',description:'pull request has been approved'}
  ],
  findByName(stateName){
    return this.get('states').findBy('name', stateName);
  },
  review(labels){
    return this.findLabel(0,labels)
  },
  revision(labels){
    return this.findLabel(1,labels)
  },
  hold(labels){
    return this.findLabel(2,labels)
  },
  complete(labels){
    return this.findLabel(3,labels)
  },
  findLabel(index, labels){
    return labels.findBy('state_id', this.get('states')[index].id)
  }
});
