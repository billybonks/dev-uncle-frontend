import Component from '@ember/component';

export default class TablesDashboard extends Component {

  columns = [
    { name: 'Title', valuePath: 'linkInfo',  cellComponent: 'columns-pr-title'},
    { name: 'Owner', valuePath: 'owner'},
    { name: 'Last Active', valuePath: 'updatedAt', cellComponent: 'days-since' },
    { name: 'Age', valuePath: 'createdAt', cellComponent: 'days-since' },
  ]

  sorts = [
    {
      valuePath: 'owner',
      isAscending: false,
    },
  ]

}
