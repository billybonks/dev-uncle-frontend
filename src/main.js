import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from '../config/environment';

const App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

/*
 * This line should be added by the blueprint
 */
loadInitializers(App, config.modulePrefix+'/src/init');

/*
 * This line should be added to support `app/` directories
 */
loadInitializers(App, config.modulePrefix);
export default App;
