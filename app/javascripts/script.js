var app = angular.module('portfolio', ['ngRoute']);



app.config(['$routeProvider',
  function($routeProvider) {

    $routeProvider
      .when('/', { // route for the home page
        templateUrl : 'pages/homepage.html',
      })
      .when('/about', { // route for the about page
        templateUrl : 'pages/about.html',
      })
      .when('/contact', { // route for the contact page
        templateUrl : 'pages/contact.html',
        controller  : 'ContactController'
      });
    }
]);


// app.controller('ContactController', function($scope, $routeParams) {
//   $scope.message = 'Everyone come and see how good I look!';
// });


app.directive('appNav', function() {
  return {
    templateUrl: 'partials/nav.html'
  };
});

app.directive('pageHeader', function($location) {
  return {
    templateUrl: 'partials/header.html',
    controller: function($scope){
      this.headerInfo = {}
      this.headerInfo.title = ($location.url() == '/' ? 'Ali Torbati' : $location.url() ),
      this.headerInfo.subtitle = "User Interface Developer",
      this.headerInfo.subsubtitle = "Los Angeles"
    },
    controllerAs: 'headerCtrl'
  };
});

app.directive('indexIntro', function() {
  return {
    templateUrl: 'partials/intro.html'
  };
});

app.directive('experienceCards', function() {
  return {
    templateUrl: 'partials/experience-cards.html',
    controller: function(){
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
    },
    controllerAs: 'cards'
  };
});

app.directive('appFooter', function() {
  return {
    templateUrl: 'partials/footer.html'
  };
});