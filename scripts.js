var MainController = function($scope) {
    
    var person = {
        firstName: "Scott",
        lastName: "Allen",
        imageSrc: "blah"
    };
    
    $scope.message = "Hello, " + person.firstName;
    $scope.person = person;
};
