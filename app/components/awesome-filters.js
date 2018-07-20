import Component from '@ember/component';
import { computed, action } from '@ember-decorators/object';

export default class AwesomeFilters extends Component {
  @action
  selectFilter(filter){
    if(this.get('selectedFilter') == filter) return;
    if(this.get('isEditing')){
      this.send('cancel');
      this.send('edit', filter);
    }
    this.sendAction('filterSelected', filter);
  }

  @action
  createFilter(){
    let newFilter = this.createFilter();
    this.send('selectFilter', newFilter);
    if(!this.get('isEditing')){
      this.send('edit', newFilter);
    }
  }

  @action
  cancel(){
    let editingFilter = this.get('selectedFilter');
    if(editingFilter){
      if(editingFilter.get('isNew')){
        editingFilter.deleteRecord();
      }
      this.set('isEditing', false);
    }
  }

  @action
  async save(){
    await this.save();
    this.send('cancel');
  }

  @action
  edit(){
    this.set('isEditing', true);
  }

  @computed('editingFilter')
  get showNewFilter(){
    let editingFilter = this.get('selectedFilter');
    if(!editingFilter) return true;
    if(!editingFilter.get('isNew')) return true;
  }
}
