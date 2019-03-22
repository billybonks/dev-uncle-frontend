import Component from '@ember/component';

// const TIME = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
// const TYPE = ['overview', 'private', 'summary'];

export default class TablesSlackNotificationTable extends Component {

  columns = [
    { name: 'Filter', valuePath: 'filter.name'},
    { name: 'Notification Time', valuePath: 'time'},
    { name: 'Channel', valuePath: 'channel'},
  ]

  sorts = [
    {
      valuePath: 'filter.name',
      isAscending: false,
    },
  ]
}
