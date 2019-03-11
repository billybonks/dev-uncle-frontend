import AbstractRoute from "client/routes/abstract-route";
import { get } from 'client/utils/ajax';

export default AbstractRoute.extend({
  title: 'Dashboard',
  model(/*params*/){
    return get('api/me').then( (results) => {
      return this.store.query('pullRequest',{reviewer: results.id});
   });

  },
});
