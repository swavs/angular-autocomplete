angular.module('auto', ['AutoCompleteModule'])
    .controller('MainCtrl', function($scope) {
        console.log('scope', $scope)

        $scope.selected = '';
        $scope.placeholder = "Placeholder";
        $scope.source = [{ label: "Choice1", value: "value1" }, { label: "Choice2", value: "value2" }];

        $scope.btn = function () {
        	console.log('Button: ', $scope.selected);	 
        };
    });
