var MainController = function($scope, $http) {
    $http.get("https://api.github.com/users/andrewniekamp")
    .then( (res) => $scope.user = res.data)
};
