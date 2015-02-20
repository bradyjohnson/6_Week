/**
 * Created by williambjohnson on 2/18/15.
 */
var app = angular.module('reddit')

app.controller('PostsController', function($scope, FirebaseService){

  var getPosts = function() {
    FirebaseService.getPosts().then(function (posts) {
      $scope.posts = posts;
    })

  }

  getPosts();

  $scope.addPost = function(){
    FirebaseService.addPost($scope.newPost).then(function(){
      delete $scope.newPost;
      getPosts();
    });

  };


});