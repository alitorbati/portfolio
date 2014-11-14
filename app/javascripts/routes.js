app.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
      templateUrl : 'pages/homepage.html',
    })
    .when('/projects', {
      templateUrl : 'pages/projects.html',
    })
    .when('/contact', {
      templateUrl : 'pages/contact.html',
    });
    // return $locationProvider.html5Mode(true);
  }]
);
