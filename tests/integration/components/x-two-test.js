import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import engineResolverFor from 'ember-engines/test-support/engine-resolver-for';

moduleForComponent('x-two', 'Integration | Component | x two', {
  integration: true,
  resolver: engineResolverFor('foo')
});

test('it renders', function(assert) {
  this.render(hbs`{{x-two}}`);

  assert.equal(this.$().text().trim(), 'Component in Foo Engine');
});
