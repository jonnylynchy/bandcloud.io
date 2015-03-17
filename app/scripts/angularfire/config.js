angular.module('firebase.config', [])
  .constant('FBURL', 'https://bandcloud.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','facebook','google','twitter'])

  .constant('loginRedirectPath', '/login');
