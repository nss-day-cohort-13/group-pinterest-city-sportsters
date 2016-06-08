angular.module("sports")
  .controller("EditCtrl", function(newPinFactory, newBoardFactory, $scope, $location, $routeParams) {
    
    $scope.title="Edit Your Pin";
    const create = this;
    const id= $routeParams.id;

    newPinFactory.getPinToEdit(id).then(pin => create.pin = pin);

    newBoardFactory.getBoardData().then(boards => create.boards = boards); 

    create.sendPin =  function () {
      console.log("edit pin function", create.pin);  
      //make a patch function. 

    };

    create.cancelPin = function() {
      $location.path("/pins");
    };//end of cancelPin

  });
