app.directive('appNav', function() {
  return {
    templateUrl: 'partials/nav.html'
  };
});

app.directive('pageHeader', function($location) {
  return {
    templateUrl: 'partials/header.html',
    controller: function($scope){
      $scope.headerInfo = {}

      if($location.url() == '/') {
        $scope.headerInfo.title = 'Ali Torbati',
        $scope.headerInfo.subtitle = 'User Interface Developer',
        $scope.headerInfo.subsubtitle = 'Los Angeles'
      };

      if($location.url() == '/projects') {
        $scope.headerInfo.title = 'Projects',
        $scope.headerInfo.subtitle = 'Development + Design',
        $scope.headerInfo.subsubtitle = 'Digital + Print'
      };
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
    controller: function($scope, $http){
      $http.get('json/experiences.json').success(function(experiences) {
        return $scope.experiences = experiences;
      });
    },
    controllerAs: 'cards'
  };
});

app.directive('projectCards', function() {
  return {
    templateUrl: 'partials/project-cards.html',
    controller: function($scope, $http){
      $http.get('json/projects.json').success(function(projects) {
        return $scope.projects = projects;
      });
    },
    controllerAs: 'projects'
  };
});

app.directive('appFooter', function() {
  return {
    templateUrl: 'partials/footer.html'
  };
});
