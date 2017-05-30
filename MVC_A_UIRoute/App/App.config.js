
uiroute.config(function ($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        // State managing  
         .state('login', {
             url: '/login',
             templateUrl: '/App/Test/login.html',
             controller: 'LoginController'
         })
        //Manager Role
        .state('manager', {
            url: '/manager',
            templateUrl: '/App/Manager/home.html'
        })
         .state('manager.list', {
             url: '/list',
             templateUrl: '/App/Test/dataList.html',
             controller: 'CarController'
         })
        .state('employee', {
            url: '/employee',
            templateUrl: '/App/Employee/home.html'
        })
        .state('employee.list', {
            url: '/list',
            templateUrl: '/App/Test/homelist.html',
            controller: function ($scope) {
                $scope.Language = ['C#', 'VB', 'JavaScript', 'PHP'];
            }
        });
        
       
});

