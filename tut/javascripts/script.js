var app = angular.module('portfolio', []);

app.controller('IndexController', ['$scope', function($scope) {
  $scope.message = 'Everyone come and see how good I look!';
}]);

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

app.directive('appFooter', function() {
  return {
    templateUrl: 'partials/footer.html'
  };
});