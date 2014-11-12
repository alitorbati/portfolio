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

app.directive('infoCards', function() {
  return {
    templateUrl: 'partials/info-cards.html',
    controller: function(){
      this.experiences = [
      {
        company: "Spokeo",
        position: "Lead UI Developer",
        duration: "Dec 2013 - present",
        link: "http://spokeo.com",
        link_title: "Spokeo.com",
        startDate: "2013/12/9",
        endDate: "",
        location: "Pasadena, CA",
        description: "As a one of only two User Interface Developers, I am responsible for creating and maintaining consistent, scalable, and functional assets and modules used throughout our application."
      },{
        company: "Rosetta",
        position: "Interactive Developer, Junior Associate",
        duration: "Apr 2013 - Nov 2013",
        link: "http://rosetta.com",
        link_title: "Rosetta.com",
        startDate: "2013/4/20",
        endDate: "2013/11/15",
        location: "San Luis Obispo, CA",
        description: "Transforming marketing for the connected world ain't easy. As a member of the marketing team I helped create and distribute consistently branded assets throughout our online presence."
      },{
        company: "DeviantART",
        position: "Marketing Intern",
        duration: "Summer 2011",
        link: "http://deviantart.com",
        link_title: "DeviantART.com",
        startDate: "2011/7/1",
        endDate: "2011/9/15",
        location: "Hollywood, CA",
        description: "This is the world's largest online art community. During my internship I researched and presented strengths and weaknesses of specific new business opportunities."
      },{
        company: "UGS",
        position: "Knowledge Manager",
        duration: "Jun 2012 - Jun 2013",
        link: "http://ugs.calpoly.edu",
        link_title: "UGS.calpoly.edu",
        startDate: "2012/6/01",
        endDate: "2013/6/20",
        location: "San Luis Obispo, CA",
        description: "University Graphic Systems is a completely student-run commercial print company. My duties included codifying and archiving our team's gained knowledge for future teams' success."
      },{
        company: "Mustang Daily",
        position: "Advertising Designer",
        duration: "Aug 2011 - Sep 2012",
        link: "http://mustangdaily.net",
        link_title: "Mustang Daily.net",
        startDate: "2011/8/20",
        endDate: "2012/10/2",
        location: "San Luis Obispo, CA",
        description: "Designers take media managers' spec sheets and turn them into profitable ads. Meeting strict deadlines and client expectations were daily responsibilities."
      }];
    },
    controllerAs: 'cards'
  };
});

app.directive('appFooter', function() {
  return {
    templateUrl: 'partials/footer.html'
  };
});