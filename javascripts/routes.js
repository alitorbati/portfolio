app.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode({enabled: true, requireBase: false});

  $routeProvider
    .when('/', {
      templateUrl : 'pages/homepage.html',
    })
    .when('/projects', {
      templateUrl : 'pages/projects.html',
    })
    .when('/contact', {
      templateUrl : 'pages/contact.html',
    });
});

app.value('$routerRootComponent', 'portfolio');
