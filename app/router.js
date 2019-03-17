import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('install');
  this.route('organisation', {path:'organisation/:id'}, function() {
    this.route('settings', function(){
      this.route('apps');
      this.route('actions');
      this.route('workflows', function(){
        this.route('new');
        this.route('edit', {path:'workflows/:workflow_id'});
      });
    });
  });
  this.route('repo', {path:'repo/:repo_id'}, function(){
    this.route('stats');
    this.route('manage', function(){
      this.route('slack');
      this.route('workflows');
    });

    this.route('workflows', function() {
      this.route('new');
      this.route('edit', {path:'workflows/:workflow_id'});
    });
  });
});

export default Router;
