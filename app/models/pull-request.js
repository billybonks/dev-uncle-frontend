import DS from 'ember-data';

export default DS.Model.extend({
  title:     DS.attr('string'),
  state:     DS.attr('string'),
  owner:     DS.attr('string'),
  repo:      DS.belongsTo('repo'),
  onlineId:  DS.attr('string'),
  ownerId:   DS.attr('string'),
  labels:    DS.attr('array'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});


//     "id": "3",
//     "repo_id": "2",
//     "number": 4,
//     "labels": [
//       {
//         "id": 482057594,
//         "url": "https://api.github.com/repos/billybonks/test/labels/duplicate",
//         "name": "duplicate",
//         "color": "cccccc",
//         "default": true
//       },
//       {
//         "id": 482057595,
//         "url": "https://api.github.com/repos/billybonks/test/labels/enhancement",
//         "name": "enhancement",
//         "color": "84b6eb",
//         "default": true
//       },
//       {
//         "id": 487842163,
//         "url": "https://api.github.com/repos/billybonks/test/labels/revision",
//         "name": "revision",
//         "color": "fbca04",
//         "default": false
//       }
//     ],
//     "state": "open",
//     "title": "Abhilash was here??",
//     "owner": "abhilashmurthy",
//     "updated_at": "2016-12-10T03:12:41.000Z",
//     "created_at": "2016-11-25T21:01:05.000Z"


//     "online_id": "191787157",
//     "owner_id": "4788281",
//   },
