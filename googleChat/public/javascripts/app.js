var app = angular.module("app", ["firebase"]);

app.controller("mainCtrl", ["$scope", "$firebaseArray",
    function($scope,$firebaseArray){
        //firebase reference
        var ref = firebase.database().ref().child("messages");
        //copy the messages from the database
        //$scope.messages = $firebaseArray(ref);

        $scope.messages = [
            {
                user:"Ryan",
                text:"Test Msg",
                img: ""    
            }
        ]

        console.log(messages);

        $scope.chat = function(message){
            //create a new_message
            var new_message = {
                user:message.user,
                text:message.text,
                img:message.img    
            }

            //add the message to firebase
            console.log(new_message);
            $scope.messages.$add(new_message);

            //reset the textfield
            message.text = '';

        }



    }])