import Component from 'ember-component';
import service from 'ember-service/inject';
import computed from 'ember-computed-decorators';

export default Component.extend({
  store: service(),
  @computed('editingFilter')
  showNewFilter(){
    let editingFilter = this.get('editingFilter')
    if(!editingFilter) return true
    if(!editingFilter.get('isNew')) return true
  },
  actions:{
    selectedFilter(filter){
      if(this.get('editingFilter') == filter) return
      this.send('cancelEditingFilter');
      this.sendAction('selectedFilter', filter)
    },
    createFilter() {
      let filter = this.get('store').createRecord('filter');
      filter.set('name', 'Filter');
      filter.set('repo', this.get('repo'));
      this.set('editingFilter', filter);
      this.sendAction('selectedFilter', filter);
      this.send('editFilter', filter);
    },
    saveFilter(){
      this.get('editingFilter').save().then( () => {
        this.send('cancelEditingFilter');
      });
    },
    cancelEditingFilter(filter){
      let editingFilter = this.get('editingFilter');
      if(editingFilter){
        if(editingFilter.get('isNew')){
          editingFilter.deleteRecord();
        }
        editingFilter.set('isEditing', false);
        this.set('editingFilter', null);
      }
    },
    editFilter(filter){
      filter.set('isEditing', true);
      this.set('editingFilter', filter);
    },
    filterModified(labels){
      let labelIds = labels.reduce( (acc, label) => {
        if(label.get('isActive')){
          acc.push(label.get('id'));
        }
        return acc;
      }, []);
      this.get('editingFilter').set('filters',{
        labels:labelIds
      });
    }
  }
});
