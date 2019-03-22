import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  repo: alias('model'),

  actions: {
    addRule(){
      let rule = this.get('store').createRecord('rule');
      this.get('repo.rules').pushObject(rule);
    },
    saveRules(){
      this.get('repo.rules').forEach( (rule) => {
        if (rule.get('hasDirtyAttributes')){
          rule.save();
          rule.set('hasDirtyAttributes', false);
        }
      });
    },
  },
});
