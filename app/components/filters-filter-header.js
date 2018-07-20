import Component from '@ember/component';
import { computed } from 'ember-decorators/object';

export default Component.extend({
  actions:{
    selectFilter(filter){
      if(this.get('selectedFilter') == filter) return;
      if(this.get('isEditing')){
        this.send('cancel');
        this.send('edit', filter);
      }
      this.sendAction('filterSelected', filter);
    },
    createFilter(){
      let newFilter = this.createFilter();
      this.send('selectFilter', newFilter);
      if(!this.get('isEditing')){
        this.send('edit', newFilter);
      }
    },
    cancel(){
      let editingFilter = this.get('selectedFilter');
      if(editingFilter){
        if(editingFilter.get('isNew')){
          editingFilter.deleteRecord();
        }
        this.set('isEditing', false);
      }
    },
    async save(){
      await this.save();
      this.send('cancel');
    },
    edit(){
      this.set('isEditing', true);
    },
  },

  @computed('editingFilter')
  get showNewFilter(){
    let editingFilter = this.get('selectedFilter');
    if(!editingFilter) return true;
    if(!editingFilter.get('isNew')) return true;
  },
});
