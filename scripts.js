(function() {
    
    const app = angular.module("githubViewer", []);

    // Will ultimately not want to use global scope
    const MainController = function($scope, $http) {
        const onUserComplete = (res) => {
            $scope.user = res.data;
        }
        const onError = (reason) => {
            $scope.error = "Could not fetch the user";
        }

        $scope.search = (username) => {
            $http.get("https://api.github.com/users/andrewniekamp")
            .then(onUserComplete, onError);
        }

        $scope.username = "Some User";
    };

    app.controller("MainController", MainController); // Not typical

}());

