// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    
    console.log("hello world!");
    var url = "http://parkland-csc175.github.io/csc175data/todos/list.json";
    
    $.get(url, function(result){
       console.log(result); 
        
       result.forEach(function(post){
           
           var $li = $("<li></li>").text(post.job);
           if(post.done)
               $li.addClass("done");    
           $("body ul").append($li);       
       }) 
    });
});