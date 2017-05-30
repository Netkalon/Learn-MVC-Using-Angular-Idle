uiroute.controller('LoginController', function ($scope, $state) {

	$scope.login=function()
	{
		if ($scope.UserName === '' || $scope.UserName == undefined)
		{
			$scope.Message = "Username is empty"
			return;
		}

		if ($scope.Password === '' || $scope.Password == undefined) {
			$scope.Message = "Password is empty"
			return;
		}
		if ($scope.UserName.toUpperCase() == 'MANAGER')
		{
			if($scope.Password=='1')
			{
				$state.go('manager')
			}
		}
		else if ($scope.UserName.toUpperCase() == 'EMPLOYEE') {
			if ($scope.Password == '1') {
				$state.go('employee')
			}
		}
		else
		{
			$scope.Message = "Username or Password is empty"
		}
	}

});