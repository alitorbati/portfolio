app.directive('appNav', function($location) {
  return {
    templateUrl: 'partials/nav.html',
    controller: function($scope){
      $scope.url = $location.url();
    }
  };
});

app.directive('pageHeader', function($location) {
  return {
    templateUrl: 'partials/header.html',
    controller: function($scope){
      $scope.headerInfo = {};
      switch($location.url()){
        case '/':
          $scope.headerInfo.title = 'Ali Torbati'
          $scope.headerInfo.subtitle = 'User Interface Developer'
          $scope.headerInfo.subsubtitle = 'Los Angeles'
          break;
        case '/projects':
          $scope.headerInfo.title = 'Projects'
          $scope.headerInfo.subtitle = 'Development + Design'
          $scope.headerInfo.subsubtitle = 'Digital + Print'
          break;
        case '/contact':
          $scope.headerInfo.title = 'Contact'
          $scope.headerInfo.subtitle = 'ali.torbati@gmail.com'
          $scope.headerInfo.subsubtitle = 'Los Angeles'
          break;
        default:
          $scope.headerInfo.title = 'Ali Torbati'
          $scope.headerInfo.subtitle = 'User Interface Developer'
          $scope.headerInfo.subsubtitle = 'Los Angeles'
          break;
      }
    },
    controllerAs: 'headerCtrl'
  };
});

app.directive('appFooter', function() {
  return {
    templateUrl: 'partials/footer.html',
    controller: function($scope, $http){
      $http.get('json/footericons.json').success(function(icons) {
        return $scope.icons = icons;
      });
    },
  };
});

app.directive('downloadPdf', function(){
  return {
    templateUrl: 'partials/download.html'
  }
});

app.directive('indexIntro', function() {
  return {
    templateUrl: 'partials/intro.html'
  };
});

app.directive('infoCards', function() {
  return {
    templateUrl: 'partials/info-cards.html',
    controllerAs: 'cards',
    controller: function($scope, $http){
      url = 'https://spreadsheets.google.com/feeds/list/1VnD8RJtceCIFPvWzrCOcQCY5eUY5_FO1yOwvGIpCXe8/od6/public/values?alt=json'
      $http.get(url).success(function(data) {
        experiences = []
        $(data.feed.entry).each(function(){
          experience = {}
          experience.company = this.gsx$company.$t
          experience.position = this.gsx$position.$t
          experience.duration = this.gsx$duration.$t
          experience.href = this.gsx$href.$t
          experience.description = this.gsx$description.$t
          experiences.push(experience)
        });
        return $scope.experiences = experiences;
      });
    },
  };
});

app.directive('projectCards', function() {
  return {
    templateUrl: 'partials/project-cards.html',
    controllerAs: 'projects',
    controller: function($scope, $http){
      url = 'https://spreadsheets.google.com/feeds/list/12sERGaYvU1ZUsEOnG11LgR8ZQVtLW3zn2Kv8yOOBPyg/od6/public/values?alt=json'
      $http.get(url).success(function(data) {
        projs = []
        $(data.feed.entry).each(function(){
          project = {}
          project.title = this.gsx$title.$t
          project.url = this.gsx$url.$t
          project.role = this.gsx$role.$t
          project.duration = this.gsx$duration.$t
          project.description = this.gsx$description.$t
          projs.push(project)
        });
        return $scope.projects = projs;
      });

      // $scope.$on('$locationChangeSuccess', function(){
      //   console.log('hihihi');
      //   // $( '.project-card-image' ).parallaxify();
      // });
    },
  };
});

app.directive('techSkills', function() {
  return {
    templateUrl: 'partials/technical-knowledge.html'
  };
});

app.directive('contactInfo', function() {
  return {
    templateUrl: 'partials/contact.html'
  };
});
