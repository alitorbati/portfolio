var app = angular.module('portfolio', ['ngRoute']);



app.config(['$routeProvider',
  function($routeProvider) {

    $routeProvider
      .when('/index', { // route for the home page
        templateUrl : 'pages/homepage.html',
        controller  : 'IndexController'
      })
      .when('/about', { // route for the about page
        templateUrl : 'pages/about.html',
        controller  : 'AboutController'
      })
      .when('/contact', { // route for the contact page
        templateUrl : 'pages/contact.html',
        controller  : 'ContactController'
      });
    }
]);





app.controller('IndexController', function($scope, $routeParams) {
  $scope.message = 'Everyone come and see how good I look!';
});

app.controller('AboutController', function($scope, $routeParams) {
  this.experiences = [
  {
    company:'Spokeo',
    position: 'Lead UI Developer',
    duration: 'FOREVARRR',
    description: 'Meatloaf tri-tip andouille tail, chicken tongue shankle cupim boudin.'
  },{
    company:'Rosetta',
    position: 'Lead UI Developer',
    duration: 'FOREVARRR',
    description: 'Meatloaf tri-tip andouille tail, chicken tongue shankle cupim boudin.'
  },{
    company:'DeviantArt',
    position: 'Lead UI Developer',
    duration: 'FOREVARRR',
    description: 'Meatloaf tri-tip andouille tail, chicken tongue shankle cupim boudin.'
  }]
});

app.controller('ContactController', function($scope, $routeParams) {
  $scope.message = 'Everyone come and see how good I look!';
});




app.directive('appNav', function() {
  return {
    templateUrl: 'partials/nav.html'
  };
});

app.directive('indexHeader', function() {
  return {
    templateUrl: 'partials/header.html'
  };
});

app.directive('indexIntro', function() {
  return {
    templateUrl: 'partials/intro.html'
  };
});

app.directive('experienceCards', function() {
  return {
    templateUrl: 'partials/experience-cards.html'
  };
});

app.directive('appFooter', function() {
  return {
    templateUrl: 'partials/footer.html'
  };
});