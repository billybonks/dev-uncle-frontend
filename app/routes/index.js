import AbstractRoute from "client/routes/abstract-route";
import fetch from 'fetch';

export default AbstractRoute.extend({
  title: 'Dashboard',
  model(/*params*/){
    return fetch('api/me').then( (resultsRaw) => {
      let results = resultsRaw.json();
      return this.store.query('pullRequest', { reviewer: results.id });
   });

  },
});
