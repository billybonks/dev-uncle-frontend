import Controller from 'ember-controller';
import computed from 'ember-computed';

export default Controller.extend({
  ajax: Ember.inject.service(),
  count:computed('model.length', function(){
    return this.get('model.length')
  }),
  slackOrgs: computed({
    get(){
      this.get('ajax').request('api/slack/orgs').then( (orgs) => {
        this.set(orgs)
      })
      return value;
    },
    set(_, value){
      return value;
    }
  })
  actions:{

    waitAFewSeconds(){
      debugger
      this.get('waitAFewSeconds').perform();
    }

  }
});
