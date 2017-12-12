var app = angular.module("app", ["firebase"]);

app.controller("mainCtrl", ["$scope", "$firebaseArray",
    function($scope,$firebaseArray){
        //firebase reference
        var ref = firebase.database().ref().child("messages");
        //copy the messages from the database
        $scope.messages = $firebaseArray(ref);

        console.log($scope.messages);

        $scope.chat = function(message){
            //create a new_message
            var new_message = {
                user: document.getElementById('username').value,
                text:message.text,
                img:document.getElementById('image').value   
            }

            //add the message to firebase
            console.log(new_message);
            $scope.messages.$add(new_message);

            //reset the textfield
            message.text = '';

        }



    }])