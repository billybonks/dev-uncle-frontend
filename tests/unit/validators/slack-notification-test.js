import { module, test } from 'qunit';
import validateSlackNotification from 'client/validators/slack-notification';

module('Unit | Validator | slack-notification');

test('it exists', function(assert) {
  assert.ok(validateSlackNotification());
});
