import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { Row, Column } from 'ember-light-table';

moduleForComponent('light-table/cells/association-select-cell', 'Integration | Component | Cells | association-select-cell', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{light-table/cells/association-select-cell}}`);
  assert.equal(this.$().text().trim(), '');
});

test('it renders value', function(assert) {
  this.set('column', new Column({ valuePath: 'foo' }));
  this.set('row', new Row({ foo: 'bar' }));

  this.render(hbs`{{light-table/cells/association-select-cell column row rawValue=(get row column.valuePath)}}`);

  assert.equal(this.$().text().trim(), 'bar');
});
