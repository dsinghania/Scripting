// https://learn.jquery.com/using-jquery-core/document-ready/
// Crud Interfaces  Create Retrieve Update & Delete

$(document).ready(function(){    
    var todos = [];     //an array to hold all the input values
    var inputValue;
    var rowId;
        
    getToDos();
    listTodos();
    //console.log(todos);
      
    $("#btn-todo-add").click(function(){
        
        //inputValue = document.forms[0].elements["task"].value;
        inputValue = $("#todo-text").val();
        
        if(inputValue == ""){
            alert("To-do List is empty");
            return false;
        }
        addNewTodo(inputValue);  
        createRow(inputValue);
        saveTodos();
        location.reload();      //reloads the resource from the current URL.
    });
        
    $("button[data-action='complete']").click(function(){        
           
        var $row = $(this).closest('tr'); 
        $row.addClass("completed");
        
        rowId = $row.attr("id");
        
        // $(".alert-success").css("display", "block");
        $(".alert-success").show();
            
        function hideMessage(){
            $(".alert-success").hide();                
        }
        setTimeout(hideMessage, 3 * 1000);
                    
        var diff = 0;
        function timeDisplay(){
            var output = "Completed " ;
            output += diff;
            output += diff < 2 ? " minute" : "minutes";
            output += " ago.";
            $row.find("td:last-child").html(output);
            diff++;
        }
        setTimeout(timeDisplay, 0);
        setInterval(timeDisplay, 60 * 1000);
        
        var updateIndex = findIndex(rowId);
        
        todos[updateIndex].completed = true;        
        saveTodos();         
        //location.reload();    //removes away the strike through from the input and also the time display  
    });
    
    $("button[data-action='remove']").click(function(){
            
        var $row = $(this).closest('tr'); 
        rowId = $row.attr("id"); 
        var removeIndex = findIndex(rowId);
        todos.splice(removeIndex, 1);
        saveTodos();
        location.reload();          //reload the current document
        $row.remove(); 
    }); 
    
    function createRow(inputValue){
        var $tab = $(".table");
        var $tr =  $("<tr></tr>").attr("id", inputValue);

        var $td1 =  $("<td></td");
        $td1.html(inputValue);
        
        var $td2 = $("<td></td");
        
        var $button1 = $("<button></button>").addClass("btn btn-icon").attr("data-action", "complete").attr("title", "complete");
        $button1.append($('<span></span>') .addClass('glyphicon glyphicon-ok'));
        
        var $button2 = $("<button></button>").addClass("btn btn-icon").attr("data-action", "remove").attr("title", "remove");
        $button2.append($('<span></span>') .addClass('glyphicon glyphicon-trash'));
        
        $td2.append($button1);
        $td2.append($button2);        
    
        var $td3 =  $("<td></td").append($("<span></span>").addClass("completed-ticker"));
        
        $tr.append($td1);
        $tr.append($td2);
        $tr.append($td3);
        
        $tab.append($tr);
    }
    
    //https://www.youtube.com/watch?v=e3XtHxV_fck
    
    function addNewTodo(input){        
        var todo = {
            name:      input,
            completed: false
        };
        todos.push(todo);        
    }
    
    function saveTodos(){        
        var str = JSON.stringify(todos);
        localStorage.setItem("todos", str);
    }
    
    function getToDos(){
        var str = localStorage.getItem("todos");
        todos = JSON.parse(str);
        if(!todos)
            todos = [];        
    }
    
    function listTodos(){
        for(var i = 0; i < todos.length; i++){
            var todo =  todos[i];
            var input = todo.name;
            createRow(input);
        }
    }    
    
    function findIndex(rowId){   
        var index;     
        for(var i = 0; i < todos.length; i++){
            var todo = todos[i];
            if(todo.name === rowId){
                index = i;
                break;
            }
        } 
        return index;
    }
});

    
   /* $(window).bind("storage", function(){
       alert("something changed!") 
    });*/