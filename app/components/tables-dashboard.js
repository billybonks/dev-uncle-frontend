import Component from '@ember/component';

export default class TablesDashboard extends Component {

  columns = [
    { name: 'Title', valuePath: 'linkInfo',  cellComponent: 'columns-pr-title'},
    { name: 'Owner', valuePath: 'owner'},
    { name: 'Repo', valuePath: 'repo.name' },
  ]

  sorts = [
    {
      valuePath: 'owner',
      isAscending: false,
    }
  ]
}
