//AJAX-  Asynchronous JavaScript and XML 
// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    
    console.log("AJAX basics");
    var url = "http://parkland-csc175.github.io/csc175data/starwars/episode-list.json";
    
    $.get(url, function(result1){
        
        //console.log(result1);
        var $href, $dataTitle, $dataDesc; 
               
        result1.forEach(function(post){
            //console.log(post);
            
            var $li = $("<li></li>");
            var $a = $("<a />").attr('href', "#").attr("data-id", post.id).attr("data-url", post.url).text(post.name);
            $li.append($a);
            $("#movie-menu").append($li); 
        });  
       
        var $allLinks = $("#movie-menu a");

        // $allLinks.click(function(event){
        $("#movie-menu").on("click", "a", function(event){    
            var $linkClicked = $(event.target);        
            var $dataId = $linkClicked.data("id");
            //console.log($dataId);
            $linkClicked.css('background-color', 'black').css('color', 'yellow');            
                
            $(".movies").fadeOut();        
           
            $(".movies").remove();  //remove previous divs    
            var $div = $("<div></div>").addClass("movies").addClass("row").attr("id", $dataId);
            var $innerDiv = $("<div></div>").addClass("col-md-12");
            $div.append($innerDiv);
            $(".container").append($div);
            
            $allLinks.not(this).css("background-color", "").css("color", "");
            
            $href = "http://parkland-csc175.github.io/csc175data/" + $linkClicked.data("url"); 
             
            $.get($href, function(result2){
                
                //console.log(result2);                
                $dataTitle = result2.title;
                $dataDesc = result2.description; 
               
                $h1 = $("<h1></h1>").text($dataTitle);
                $p = $("<p></p>").text($dataDesc);
                $div.append($h1);
                $div.append($p);
                $div.css('background-color', 'black').css('color', 'yellow').fadeIn();
            }); 
        }); 
    });
});