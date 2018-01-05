(function() {
    
    const app = angular.module("githubViewer", []);

    // Will ultimately not want to use global scope
    const MainController = function($scope, $http, $interval, $log) {
        const onUserComplete = (res) => {
            $scope.user = res.data;
            $http.get($scope.user.repos_url)
            .then(onRepos, onError);
        }
        const onRepos = (res) => {
            $scope.repos = res.data;
        }
        const onError = (reason) => {
            $scope.error = "Could not fetch the data"; // Usually more specific
        }

        const decrementCountdown = () => {
            $scope.countdown -= 1;
            if ($scope.countdown < 1) {
                $scope.search($scope.username);
            }
        }

        let countdownInterval = null;
        const startCountdown = () => {
            countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        }

        $scope.search = (username) => {
            $log.info("Searching for " + username);
            $http.get("https://api.github.com/users/" + username)
            .then(onUserComplete, onError);
            if (countdownInterval) {
                $interval.cancel(countdownInterval);
                $scope.countdown = null;
            }
        }

        $scope.repoSortOrder = "-stargazers_count";
        $scope.username = "Angular";
        $scope.countdown = 5;
        startCountdown();
    };

    app.controller("MainController", MainController); // Not typical

}());

