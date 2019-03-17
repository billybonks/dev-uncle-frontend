import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | organisation.settings.actions', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:organisation.settings.actions');
    assert.ok(route);
  });
});
