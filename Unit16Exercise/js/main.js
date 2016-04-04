// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    
    console.log("hello world");
    var intervalKey = null;
    $(window).bind("storage", function(){
       alert("something changed!") 
    });

    $("button[data-action='remove']").click(function(){
       localStorage.setItem("blah", Date.now()); 
    });
    
    $("#store-input").click(function(){
        var ans = prompt("Please enetr some data");
        
        localStorage.setItem("userInput" , ans);
        
    });
    $("#retrieve-data").click(function(){
        
        var value = localStorage.getItem("userInput");
        $("#output").html(value);
    });
    
    $("#go-google").click(function(){
         var value = localStorage.getItem("userInput");
         var url = "https://www.google.com";
         url += "/?gws_rd=ssl#q=" + value;
         
         document.location.assign(url);        
    });
    
    //http://stackoverflow.com/questions/10632346/how-to-format-a-date-in-mm-dd-yyyy-hhmmss-format-in-javascript
    $("#start-interval").click(function(){
        function printDate(){
        var d = new Date();
        var dformat = [d.getMonth()+1,
               d.getDate(),
               d.getFullYear()].join('/')+' '+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');
            $("#output").html(  dformat );          
        }
        intervalKey = setInterval(printDate, (5 * 1000));
    });
    
    $("#stop-interval").click(function(){
        
        clearInterval(intervalKey);
    });
    
    $("#delayed-message").click(function(){
        function printName(){
              $("#output").html( "Dipty");
        }
       setTimeout(printName, 3* 1000);   
    });
});