// https://learn.jquery.com/using-jquery-core/document-ready/

$(document).ready(function(){
 
    $("#email_form").submit(function(e){
        
        var $email_1 = $("#email_1");
        
        //check if its empty or null
        if($email_1.val() == null || $email_1.val() == ""  
              || $email_1.val() == " " || $email_1.val() == undefined ){
                               
            e.preventDefault();     //prevent the form from submitting     
            
            var $err = $("<p> Hey this is wrong!</p>");
            $email_1.parent().append($err);
                
            return false;           //not required, but good practice
        }
        
        //valid email address checking
        if( $email_1.val().indexOf("@") < 0 || $email_1.val().indexOf(".") == -1 ){
            
            e.preventDefault();     //prevent the form from submitting         
            return false;   
            
        }
    });
    
});