// https://learn.jquery.com/using-jquery-core/document-ready/
// complex Validation
$(document).ready(function(){
    
    $("#state").addClass("isstate");
    $("#zip").addClass("isValidZip");

    $("#email_form").validate({

        rules: {
          "email_1": {
              required: true,
              email:    true
          },
          "email_2": {
              required:  true,
              email:     true,
              equalTo : "#email_1"
          },
          "first_name": {
              required: true
          },
          "last_name": {
              required: true
          },
          "state": {
              required:  true,
              minlength: 2,
              maxlength: 2
          },
          "zip": {
              required: true,
              digits:   true,
              //minlength: 5,
              //maxlength: 5
          }            
        },        
        messages: {
           "email_1": {
               required: "Please enter a valid email."
           },
           "email_2":{
               required: "Please enter your email again.",
               equalTo:  "Email address should match.",
               
           },
           "first_name": {
               required: "Please enter your first name."
           },
           "last_name": {
               required: "Please enter your last name."
           },
           "state": {
               required: "Please enter a valid state code."
           },
           "zip": {
               required: "Valid zip code is required.",
               digits:   "Only digits are allowed."
           }
        }
    });

});

//http://stackoverflow.com/questions/5696222/jquery-validator-check-input-against-a-list-of-accepted-values
jQuery.validator.addMethod("isstate", function(value) {
    var states = [
        "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
        "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
        "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
        "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
        "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
        "AS", "DC", "FM", "GU", "MH", "MP", "PR", "PW", "VI"
    ];
    return $.inArray(value.toUpperCase(), states) != -1;
}, "Not a valid state");

//https://github.com/jzaefferer/jquery-validation/blob/master/src/additional/zipcodeUS.js

$.validator.addMethod( "isValidZip", function( value, element ) {
	return this.optional( element ) || /^\d{5}(-\d{4})?$/.test( value );
}, "The specified US ZIP Code is invalid, Please enter 5 digit code" );

/*
jQuery.validator.addMethod("isValidZip", function(value){
    
    var zips = ['12345','23456' ,'45678','12365'];    
    return $.inArray(value, zips) != -1;
    
}, "Invalid Zip Code" );

    //var zipMessage, zipVal = $('#zip').val();
    // $.inArray will return -1 if value not found
    //( $.inArray(zipVal ,zips )==-1)? zipMessage="Invalid Zip Code": zipMessage="Valid";        
     //   $('p').text(zipMessage);
    
 valid zip codes here--- //http://www.phaster.com/zip_code.html
*/