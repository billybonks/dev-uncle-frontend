import Service from 'ember-service';

export default Service.extend({
  findLabel(id, labels){
    if(labels){
      return labels.findBy('state_id', parseInt(id));
    } else {
      return [];
    }
  }
});
