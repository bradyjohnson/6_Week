var app = angular.module('itunes');

app.service('itunesService', function($http, $q){
  this.getSongs = function(artist){
    //make jsonp request and when it comes back get ust the songs and resolve a promise with that
    var deferred = $q.defer();
    $http.jsonp('https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK').then(function(response){
      deferred.resolve(response.data.results);
    })
    return deferred.promise;
  }


  //This service is what will do the 'heavy lifting' and get our data from the iTunes API.
  //Also not that we're using a 'service' and not a 'factory' so all your method you want to call in your controller need to be on 'this'.

  //Write a method that accepts an artist's name as the parameter, then makes a 'JSONP' http request to a url that looks like this
  //https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
  //Note that in the above line, artist is the parameter being passed in. 
  //You can return the http request or you can make your own promise in order to manipulate the data before you resolve it.

    //Code here
});