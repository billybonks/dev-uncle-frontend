import service from 'ember-service/inject';
import AbstractRoute from "client/routes/abstract-route";

export default AbstractRoute.extend({
  ajax: service(),
  title: 'Install',
  model(){
    return this.get('store').findAll('repo');
  }
});
