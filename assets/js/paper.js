(function(){
  var baseUrl = "assets/";
  var gems= [{ name: 'Azurite', price: 2.95 },{ name: 'Bal', price: 233.95 }];
  var projects= [{id:0,name: 'REST API', content: "Learn about Rest Apis", image:"",at:"United Online" },{id:1, name: 'SOAP API', content: "Learn about SOAP Apis", image:"",at:"Joey Online" }];
  var app = angular.module('paperApp',  ['ngRoute','ngSanitize']);


  app.config(["$routeProvider","$locationProvider",function($routeProvider,$locationProvider) {
    $routeProvider

      // route for the home page
        .when('/', {
          templateUrl : baseUrl + 'js/angularTemplates/home.html',
          controller  : 'homeController'
        })

      // route for the about page
        .when('/services', {
          templateUrl : baseUrl + 'js/angularTemplates/about.html',
          controller  : 'aboutController'
        })

        .when('/portfolio', {
          templateUrl : baseUrl + 'js/angularTemplates/portfolio.html',
          controller  : 'portfolioController'
        })

        .when('/project/:id', {
          templateUrl : baseUrl + 'js/angularTemplates/project.html',
          controller  : 'projectController'
        })


        .when('/about', {
          templateUrl : baseUrl + 'js/angularTemplates/about.html',
          controller  : 'aboutController'
        })

      // route for the contact page

        .when('/contact', {
          templateUrl : baseUrl + 'js/angularTemplates/contact.html',
          controller  : 'contactController'
        })

        .when('/404', {
          controller: function(){
            window.location.replace('/');
          }
        }).otherwise({
          redirectTo: '/404'
        });


  }]);

  app.filter('trustHtmlExample', function($sce) {
    return function (input) {
      return $sce.trustAsHtml(input);
    }
  });

  app.controller('homeController',function($scope,$http,$routeParams){
    //$scope.posts = {};
    $scope.msg = "msg";
    //$http.get('?json=get_recent_posts').success(function(data){
    //  console.log(data);
    //  $scope.posts = data.posts;
    //});

  });


  app.controller('postController',function($scope,$http,$routeParams){
    console.log($routeParams.slug);
    $scope.post ={};
    $scope.msg = "msg";
    $http.get('?post_slug='+$routeParams.slug+'&json=get_post').success(function(data){
      console.log("post is"+ data);
      console.log( data);
      $scope.post = data.post;
    });
  });


  app.controller('aboutController',function(){
    this.products = gems;
  });

  app.controller('contactController',function(){
    this.products = gems;
  });
  app.controller('portfolioController',function($scope){
    $scope.projects = projects;
  });

  app.controller('projectController',function($scope,$routeParams){
    console.log($routeParams);
    console.log($routeParams.id);
    var str = $routeParams.id.substr(1);
    console.log(str);
    console.log(projects[str]);
    $scope.project = projects[str];
  });
})();



