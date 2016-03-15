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
            
            var $div = $("<div></div>").addClass("movies").addClass("row").attr("id", post.id);
            var $innerDiv = $("<div></div>").addClass("col-md-12");
            $div.append($innerDiv);
            $(".container").append($div);
            
            $href = "http://parkland-csc175.github.io/csc175data/" + post.url; 
             
            $.get($href, function(result2){
                
                //console.log(result2);                
                $dataTitle = result2.title;
                $dataDesc = result2.description; 
                //console.log($dataTitle);
                //console.log($dataDesc);
               
                $h1 = $("<h1></h1>").text($dataTitle);
                $p = $("<p></p>").text($dataDesc);
                $div.append($h1);
                $div.append($p);
                $div.hide();
            }); 
        });  
       
        var $allLinks = $("#movie-menu a");
        //var $allDesc = $(".movies");

        $allLinks.click(function(event){
            
            var $linkClicked = $(event.target);        
            var $dataId = $linkClicked.data("id");
            $linkClicked.css('background-color', 'black').css('color', 'yellow');
            
            var $divToShow = $("#"+ $dataId);
            $divToShow.removeAttr("style");           
            $divToShow.css('background-color', 'black').css('color', 'yellow');
            $divToShow.show();
        });   
    
        //$allDesc.not(this).fadeOut();
        //$divToShow.fadeIn();      
        //$allLinks.not(this).css("background-color", "").css("color", "");   //can use remove attr 
    });
});