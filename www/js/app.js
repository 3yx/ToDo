angular.module('ToDo', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.controller('ToDoCtrl', function($scope, $ionicModal){
  $scope.tasks = [
    {title:'OLcdsLo',description:'Olfa', done:false},
    {title:'asdaw',description:'Olfqweqwea', done:true},
    {title:'OLsOLo',description:'Olwqewqefa', done:false},
    {title:'OLwewaeOLo',description:'asdwq', done:false},
  ];
})
