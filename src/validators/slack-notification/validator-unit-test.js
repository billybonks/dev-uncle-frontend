import { module, test } from 'qunit';
import validateSlackNotification from "client/src/validators/slack-notification/validator";

module('Unit | Validator | slack-notification');

test('it exists', function(assert) {
  assert.ok(validateSlackNotification());
});
