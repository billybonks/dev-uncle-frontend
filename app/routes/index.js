import AbstractRoute from "client/routes/abstract-route";
import service from 'ember-service/inject';

export default AbstractRoute.extend({
  title: 'Dashboard',
  ajax: service(),
  model(/*params*/){
    return this.get('ajax').request('api/me').then( (results) => {
      return this.store.query('pullRequest',{reviewer: results.id});
   });

  },
});
