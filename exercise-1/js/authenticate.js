// JavaScript authentication file
$(function() {

    // Initialize Firebase

    var config = {
    	apiKey: "AIzaSyAzbwwYGlwD1YORGVtxzW0T8Wt-8jam4o8",
    	authDomain: "m13-ex1.firebaseapp.com",
    	databaseURL: "https://m13-ex1.firebaseio.com",
    	storageBucket: "m13-ex1.appspot.com",
    	messagingSenderId: "390919527632"
  	};
  	
  	firebase.initializeApp(config);


    // Sign Up: Function to create account on firebase, then redirect to index.html
    var signUp = function() {
        // Get email, password, and display name
        var email = $('#sign-up-email').val();
        var password = $('#sign-up-pass').val();
        var dsplyName = $('#display-name-sign-up').val();
        console.log(email, password, dsplyName);
        // Create user, then set the user's display name
        firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {


                // Set display name
                user.updateProfile({
                	displayName: dsplyName
                })
        });        
    	window.location = 'index.html';
    };

    // SignIn: Function to authenticate on Firebase, then redirect to index.html
    var signIn = function() {
        // Get email and password
        var email = $('#sign-in-email').val();
        var password = $('#sign-in-pass').val();


        // Authenticate using email and password, then redirect
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function() {
        	window.location = 'index.html';

        })
        .catch(function(error) {
        	window.alert(error);
        });
    };

    // Sign out: Function to log a user out of firebase
    var signOut = function() {
        // Sign out, then redirect
        firebase.auth().signOut().then(function() {


    		window.location = 'sign-up.html';
    	});


    };

    // Assign event lister to form submission
    $('form').on('submit', function(event) {
    	event.preventDefault();
    	var formId = $(this).attr('id');
    	if (formId == 'sign-up') {
    		signUp();
    	} else {
    		signIn();
    	}
    });

    $('#log-out').on('click', function() {
    	signOut();
    });


    // Authentication Change: see if a user is already signed in, and redirect

            // Rediriect to index.html if there is a user and the pathname isn't '/'

            // Redirect to sign-in if there is NOT a user and the pathname IS '/'

});
