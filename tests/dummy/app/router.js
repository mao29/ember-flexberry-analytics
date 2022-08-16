import EmberRouter from '@ember/routing/router';
import config from './config/environment';


const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('pentaho-sample');
  
  });

export default Router;
