import Component from 'ember-component';
import { computed } from 'ember-decorators/object';

export default Component.extend({
  actions:{
    selectFilter(filter){
      if(this.get('selectedFilter') == filter) return;
      if(this.get('isEditing')){
        this.send('cancelEditingFilter');
        this.send('editFilter', filter);
      }
      this.sendAction('filterSelected', filter);
    },
    createFilter(){
      let newFilter = this.createFilter();
      this.send('selectFilter', newFilter);
      if(!this.get('isEditing')){
        this.send('editFilter', newFilter);
      }
    },
    saveFilter(filterHash){
      let editingFilter = this.get('selectedFilter');
      editingFilter.filterHash = filterHash;
      editingFilter.save().then( () => {
        this.send('cancelEditingFilter');
      });
    },
    cancelEditingFilter(){
      let editingFilter = this.get('selectedFilter');
      if(editingFilter){
        if(editingFilter.get('isNew')){
          editingFilter.deleteRecord();
        }
        this.set('isEditing', false);
      }
    },
    editFilter(filter){
      this.set('isEditing', true);
      this.set('selectedFilter', filter);
    },
  },
  @computed('editingFilter')
  showNewFilter(){
    let editingFilter = this.get('selectedFilter');
    if(!editingFilter) return true;
    if(!editingFilter.get('isNew')) return true;
  },
});
