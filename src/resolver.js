import Resolver from 'ember-resolver/resolvers/fallback'
import buildResolverConfig from 'ember-resolver/ember-config';
import config from '../config/environment';

let moduleConfig = buildResolverConfig(config.modulePrefix);

['breakpoints', 'session', 'session-store'].forEach(type => {
  moduleConfig.types[type] = { definitiveCollection: 'main' };
  moduleConfig.collections['main'].types.push(type);
});

export default Resolver.extend({
  config: moduleConfig
});
