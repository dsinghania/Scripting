// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    console.log("JQuery");
    
    var $allLinks = $("#movie-menu a");
    var $allDesc = $(".movies");
    
    $allLinks.click(function(event){
        
        var $linkClicked = $(event.target);
        //console.log($linkClicked);
        
        //var $dataTarget = $linkClicked[0].getAttribute("data-target");
        var $dataTarget = $linkClicked.data("target");
        //console.log($dataTarget);
        
        var $divClicked = $("#"+ $dataTarget);
        //console.log($divClicked);
        
        $divClicked.css('background-color', 'black')
                   .css('color', 'yellow');

        $linkClicked.css('background-color', 'black')
                    .css('color', 'yellow');
  
        $allDesc.not(this).fadeOut();
        $divClicked.fadeIn();
      
        //$allLinks.not(this).css("background-color", "").css("color", "");
        $allLinks.not(this).removeAttr("style");
    });
});