import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | repo/manage/workflows', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:repo/manage/workflows');
    assert.ok(route);
  });
});
