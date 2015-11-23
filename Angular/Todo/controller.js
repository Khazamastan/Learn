    var app = angular.module('RoutingApp', ['ngRoute'])
    .config( ['$routeProvider', function($routeProvider) {
		$routeProvider
           .when('/add', {
                templateUrl:'add.html',
                controller : 'viewController as bookslist'
            })
            .when('/view', {
                templateUrl: 'view.html',
                controller : 'viewController as bookslist'
            })
            .when('/edit/:id', {
              controller:'editController as editBook',
              templateUrl:'add.html'
            })
            .when('/login', {
              controller:'userController as user',
              templateUrl:'login.html'
            })
            .when('/signup', {
              controller:'userController as user',
              templateUrl:'signup.html'
            })
            .when('/users', {
              controller:'userController as user',
              templateUrl:'users.html'
            })
            .otherwise({
                templateUrl: 'home.html'
            });
    }]);

$books = [
    {'id': 1, 'url': 'http://riot.design/media/gardahaus-port-400x400.jpg', 'name':'Move On Firenze','desc':'Graphic Design'},
    {'id': 2, url: 'http://riot.design/media/port-moveon1-400x400.jpg', name:'Move On Firenze',desc:'Web Design'},
    {'id': 3, url: 'http://riot.design/media/port-bancaagci1-400x400.jpg', name:'Move On Firenze',desc:'Photo Design'},
    {'id': 4, url: 'http://riot.design/media/port-antico_setificio_fiorentino-b1-400x400.jpg', name:'Move On Firenze',desc:'Product Design'},
    {'id': 5, url: 'http://riot.design/media/lpconf-portfolio-400x400.jpg', name:'Move On Firenze',desc:'Graphic Design'},
    {'id': 6, url: 'http://riot.design/media/resiltech-portfolio-400x400.jpg', name:'Move On Firenze',desc:'Web Design'},
    {'id': 7, url: 'http://riot.design/media/port-archea-400x400.jpg', name:'Move On Firenze',desc:'Web Design'},
    {'id': 8, url: 'http://riot.design/media/port-midnightfactory-400x400.jpg', name:'Move On Firenze',desc:'Product Design'}
    ];
$users = [
    {'id': 1, 'name': 'Khajamastan', 'email':'khazamastan@gmail.com','phone':'7207810602','password':'123'}
    ];
$chats = [
    {text:'Hi'},{text:'Hello'},{text:'Hi'},{text:'Hello'},{text:'Hi'},{text:'Hello'},{text:'Hi'},{text:'Hello'},{text:'Hi'},{text:'Hello'}
    ];
$loggedin = false;
app.controller('viewController', function($scope, $location) {
                    $scope.All=$books;
                    $scope.book ={id: '','url': 'http://riot.design/media/gardahaus-port-400x400.jpg', 'name':'','desc':''};                    
                   // console.log($scope.book.name);
                    $scope.addbook = function(){
                        $scope.book.id = $books.length+1; 
                        $books.push($scope.book);
                        $location.path('/view');
                    };
                    $scope.filter = function(){
                        
                    }
});

app.controller('editController', function($scope,$routeParams, $location) {
                    var projectId = $routeParams.id;
                   // var projectIndex = $books.$indexFor(projectId);
                    console.log("id:" + projectId + "- index:")
                    $scope.All=$books;
                    $scope.book = $books[projectId-1];
                    
                    $scope.addbook = function(){
                        $books[projectId-1] = $scope.book;
                        $location.path('/view');
                    };
}); 
app.controller('userController', function($scope,$routeParams, $location) {
              $scope.msg = {text : ''};
              $scope.msgs = $chats;
              console.log($loggedin);
              $scope.loggedin= $loggedin;
              $scope.users= $users;
              $scope.newuser = {'id': '', 'name': '', 'email':'','phone':'','password':''};
              $scope.savUser = function(){
                                    $scope.newuser.id = ($users.length+1)
                                    $users.push($scope.newuser);
                                    $location.path('/');
                                }
              $scope.logincheck = function () {
                                var $result =false; 
                                for(var i=0;i < $users.length;i++){
                                    if($users[i].email == $scope.newuser.email && $users[i].password == $scope.newuser.password){
                                        $result = true;
                                    }
                                }
                                    return true;
                             }
              
              $scope.login = function () {
                                alert($scope.logincheck())
                                $loggedin = $scope.logincheck();   
                                $scope.loggedin = $scope.logincheck(); 
                                if($loggedin){
                                    $location.path('/');
                                }
                             }
              $scope.chat = function(){
                            alert()
                            $chats.push($scope.msg);
                            $scope.msgs = $chats;
                            console.log($scope.msg.text);
                            }
}); 