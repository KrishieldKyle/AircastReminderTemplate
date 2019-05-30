var app = angular.module('app',[]);

app.controller('dailyReminderController',function($scope, $window, $interval, $timeout, $http){

	var counter = 0;
	$scope.reminder = ["Everything has beauty, but not everyone sees it.","Addiction is a symptom of not growing up."
	, "Success is the best revenge for anything.", "Alone we can do so little; together we can do so much.", "Nothing will work unless you do.","Alone we can do so little; together we can do so much."
	, "Don't hate what you don't understand.", "Nothing can bring you peace but yourself.","Go for it."];

	$scope.currentItem = $scope.reminder[0];

	$interval(function(){
		if (counter < $scope.reminder.length) {
			$scope.currentItem = $scope.reminder[counter];
			counter++;
		}else {
			counter = 0;
			$scope.currentItem = $scope.reminder[counter];
		}
		$scope.apply();
	}, 3000);

})