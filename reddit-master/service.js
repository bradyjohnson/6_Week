/**
 * Created by williambjohnson on 2/18/15.
 */
var app = angular.module('reddit')

app.service('FirebaseService', function($http, $q) {

  this.getPosts = function () {
    var deferred = $q.defer();
    $http.get('https://devmtn.firebaseio.com/posts.json').then(function (response) {
      deferred.resolve(response.data);
    })

    return deferred.promise;
  }

  this.addPost = function(post){

    var guid = function() {
      var s4 = function() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }

      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }

    post.timestamp = Date.now();
    post.comments = [];
    post.karma = 0;
    post.id = guid();


    return $http.put('https://devmtn.firebaseio.com/posts/' + post.id + '.json', post)


  }


});