//Get the form element
var form = document.getElementById('userForm');

//When form is submitted
form.onsubmit = function(event) {
    // clear any old error messages
    document.getElementById('validationError').innerHTML = '';

     // Doesn't let the page refresh
     event.preventDefault();
    
    //Grab what the user typed
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var zipCode = document.getElementById('zipCode').value;
    
    //First name and last name variable
    var fullName = firstName + ' ' + lastName;
    
    //This makes sure the name isn't too long
    if (fullName.length > 20) {
        // if the name is too long this shows the error message
        document.getElementById('validationError').innerHTML = 'Name is too long';
        return false;
    }
    
    //Checks if zip is 5 digits
    if (zipCode.length != 5 || isNaN(zipCode)) {
        // if the zipcode is not 5 digits this will show the error message
        document.getElementById('validationError').innerHTML = 'Please enter a valid 5-digit zip code!';
        return false;
    }
    
    //Create secret message
    var secretMessage = "'This message is a secret...'";
    
    //Show the message to the user
    document.getElementById('messageContent').innerHTML = secretMessage;
    document.getElementById('secretMessage').style.display = 'block';
    
    //Don't submit the form
    return false;
};