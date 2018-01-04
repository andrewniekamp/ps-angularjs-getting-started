(function() {
    
    const app = angular.module("githubViewer", []);

    const MainController = function($scope, $http) {
        const onUserComplete = (res) => {
            $scope.user = res.data;
        }
        const onError = (reason) => {
            $scope.error = "Could not fetch the user";
        }
        $http.get("https://api.github.com/users/andrewniekamp")
        .then(onUserComplete, onError);
    };

    app.controller("MainController", MainController); // Not typical

}());

