// https://learn.jquery.com/using-jquery-core/document-ready/
// CRUD Interfaces  Create Retrieve Update & Delete

$(document).ready(function(){    
    var todos = [];     //an array to hold all the input values
    var inputValue;
    var rowId;
    var diff = 0;
        
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
        var todo = addNewTodo(inputValue);
        createRow(todo);
        saveTodos();
        location.reload();          //reload the current document
        listTodos();
    });
        
   // $("button[data-action='complete']").click(function(){        
    $(".table").on("click", "button", (function(e){        
                
        var $buttonClicked = $(this).data("action");
        var $row = $(this).closest('tr'); 
        rowId = $row.attr("id");               
        var index = findIndex(rowId); 
        
        if($buttonClicked === "complete"){
            showCompleted($row);        
            todos[index].completed = true; 
        }       
        if($buttonClicked === "remove"){
            todos.splice(index, 1);
            $row.remove(); 
        }                 
        saveTodos(); 
    }));
    
    function createRow(todo){
        var inputValue = todo.name;
        var complete = todo.completed;
        
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
        
        if(complete)
            showCompleted($tr);
    }
    
    //https://www.youtube.com/watch?v=e3XtHxV_fck
    
    function addNewTodo(input){        
        var todo = {
            name:      input,
            completed: false
        };
        todos.push(todo);  
        return todo;      
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
            createRow(todos[i]);
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
    
    function showCompleted($row){         
        $row.addClass("completed");
        
        // $(".alert-success").css("display", "block");
        $(".alert-success").show();
            
        function hideMessage(){
            $(".alert-success").hide();                
        }
        setTimeout(hideMessage, 3 * 1000);
        function timeDisplay(){
            var output = "Completed " ;
            output += diff;
            output += diff < 2 ? " minute" : " minutes";
            output += " ago.";
            $row.find("td:last-child").html(output);
            diff++;
        }
        setTimeout(timeDisplay, 0);
        setInterval(timeDisplay, 60 * 1000);
    }
});
    
   /* $(window).bind("storage", function(){
       alert("something changed!") 
    });*/