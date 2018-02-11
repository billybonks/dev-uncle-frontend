import { inject as service } from '@ember/service';
import AbstractRoute from "client/routes/abstract-route";

export default AbstractRoute.extend({
  ajax: service(),
  title: 'Install',
  model(){
    return this.get('store').findAll('repo');
  }
});
