import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-one', 'Integration | Component | x one', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{x-one}}`);

  assert.equal(this.$().text().trim(), 'Component in main application');
});
