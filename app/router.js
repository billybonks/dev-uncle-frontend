import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('install');
  this.route('repo', {path:'repo/:repo_id'}, function(){
    this.route('stats')
    this.route('manage')
  });
});

export default Router;
