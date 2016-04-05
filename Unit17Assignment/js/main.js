// https://learn.jquery.com/using-jquery-core/document-ready/
// Crud Interfaces

$(document).ready(function(){
    
    console.log("hello world");
    var inputValue;
    $("#btn-todo-add").click(function(){
        
        inputValue = document.forms[0].elements["task"].value;
        localStorage.setItem("added" , inputValue);
        //console.log(inputValue);
        
        var $tab = $(".table");
        var $tr =  $("<tr></tr>");
        $tr.html = inputValue;
        $tab.append($tr);
        
        var $td1 =  $("<td></td");
        $td1.html(inputValue);
        $tr.append($td1);
        
        var $td2 = $("<td></td");
        var $button1 = $("<button></button>").addClass("btn btn-icon").attr("data-action", "complete").attr("title", "complete");
        $button1.append($('<span></span>') .addClass('glyphicon glyphicon-ok'));
        $td2.append($button1);
        
        var $button2 = $("<button></button>").addClass("btn btn-icon").attr("data-action", "remove").attr("title", "remove");
        $button2.append($('<span></span>') .addClass('glyphicon glyphicon-trash'));
        $td2.append($button2);
        
        $tr.append($td2);
        
        var $td3 =  $("<td></td").append($("<span></span>").addClass("completed-ticker"));
        
        $tr.append($td3);
        localStorage.setItem("tableAdded", $tab);
        
    $("button[data-action='complete']").click(function(e){
        localStorage.setItem("completed" , inputValue);
            
        var $row = $(this).closest('tr'); 
        $row.addClass("completed");
        //$(this).css("visibility", "visible");
           
        // $(".alert-success").css("display", "block");
        $(".alert-success").show();
            
        function hideMessage(){
            $(".alert-success").hide();                
        }
        setTimeout(hideMessage, 3 * 1000);
            
        var dt = new Date();
        var time1 = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
        //console.log(time1);
        
        var diff = 0;
        function timeDisplay(){
            var output = "Completed " ;
            output += diff;
            output += diff < 2 ? " minute" : "minutes";
            output += " ago.";
            $row.find("td:last-child").html(output);
            diff++;
        }
        setTimeout(timeDisplay, 1);
        setInterval(timeDisplay, 60 * 1000);           
           
    });
    /*
    var url = "file:///C:/Users/Dipty/Desktop/CSC175/Unit17Assignment/index.html";
    url += "?task=";
    var arr = inputValue.split(" ");
    for (var i = 0; i < arr.length; i++) {
        url += arr[i] + "+";
    }
    document.location.assign(url);
    */
    var input = localStorage.getItem("added");
    var tab = localStorage.getItem("tableAdded");
    
        
    $("button[data-action='remove']").click(function(e){
        
        var $row = $(this).closest('tr'); 
        $row.remove();
        //localStorage.removeItem("added");
        //localstorage.removeItem("completed");
    });
 
    });
});
    
    $(window).bind("storage", function(){
       alert("something changed!") 
    });