// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    $("#email_form").validate({
            rules: {
                "email_1": {                //name attribute of the form
                    required: true,
                    email: true
                },
                "full_name": {
                    required: true                    
                }         
            },
            messages: {
                "email_1": {
                    required: "Email is required"
                },
                "full_name": {
                    required: "Please enter your name"
                }
            }    
        });    

});