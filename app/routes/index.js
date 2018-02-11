import AbstractRoute from "client/routes/abstract-route";
import { inject as service } from '@ember/service';

export default AbstractRoute.extend({
  ajax: service(),
  title: 'Dashboard',
  model(/*params*/){
    return this.get('ajax').request('api/me').then( (results) => {
      return this.store.query('pullRequest',{reviewer: results.id});
   });

  },
});
