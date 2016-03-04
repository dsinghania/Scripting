// https://learn.jquery.com/using-jquery-core/document-ready/

$(document).ready(function(){
    console.log("JQuery");
    
    var $allLinks = $("a");
    var $allDesc = $(".movies");
    
    $('a').click(function(event){
        
        var $linkClicked = $(event.target);
        //console.log($linkClicked);
        
        var $dataTarget = $linkClicked[0].getAttribute("data-target");
        //console.log($dataTarget);
        
        var $divClicked = $("#"+ $dataTarget);
        //console.log($newEpisode);
        
        createClickHandler($linkClicked, $divClicked);        
    });
    
    function createClickHandler($link, $divToShow) {

      $divToShow.css('background-color', 'black')
                .css('color', 'yellow');

      $link.css('background-color', 'black')
           .css('color', 'yellow');
  
      $allDesc.not(this).fadeOut();
      $divToShow.fadeIn();
      $allLinks.not(this).css("background-color", "").css("color", "");
  }
});

/*
    var $episodeOneLink = $("a[data-target='episode-one']");
    console.log($episodeOneLink);
    var $episodeOne = $("#episode-one");
    
    var $episodeTwoLink = $("a[data-target='episode-two']");
    var $episodeTwo = $("#episode-two");
    
    var $episodeThreeLink = $("a[data-target='episode-three']");
    var $episodeThree = $("#episode-three");
    
    var $episodeFourLink = $("a[data-target='episode-four']");    
    var $episodeFour = $("#episode-four");
    
    var $episodeFiveLink = $("a[data-target='episode-five']");    
    var $episodeFive = $("#episode-five");
    
    var $episodeSixLink = $("a[data-target='episode-six']");    
    var $episodeSix = $("#episode-six");

    var $episodeSevenLink = $("a[data-target='episode-seven']");    
    var $episodeSeven = $("#episode-seven");
    
    $episodeOneLink.click(createClickHandler($episodeOneLink, $episodeOne));
    $episodeTwoLink.click(createClickHandler($episodeTwoLink, $episodeTwo));
    $episodeThreeLink.click(createClickHandler($episodeThreeLink, $episodeThree));
    $episodeFourLink.click(createClickHandler($episodeFourLink, $episodeFour));
    $episodeFiveLink.click(createClickHandler($episodeFiveLink, $episodeFive));
    $episodeSixLink.click(createClickHandler($episodeSixLink, $episodeSix));
    $episodeSevenLink.click(createClickHandler($episodeSevenLink, $episodeSeven));
   
   function createClickHandler($link, $divToShow) {
       
      var clickHandler = function(evt){
      $divToShow.css('background-color', 'black')
                .css('color', 'yellow');

      $link.css('background-color', 'black')
           .css('color', 'yellow');
  
      $allDesc.not(this).fadeOut();
      $divToShow.fadeIn();
      $allLinks.not(this).css("background-color", "").css("color", "");
  }
  return clickHandler;
}
});
   if($("#movie-menu").find('[data-target = "episode-one"]').click(function(event){          
         $(this).css('background-color', 'black')
                .css('color', 'yellow');
         $episodeOne.css('background-color', 'black')
               .css('color', 'yellow');                
         $allDesc.not(this).fadeOut();     
         $episodeOne.fadeIn();         
         $allLinks.not(this).css("background-color", "").css("color","");
    }));         
    if($("#movie-menu").find('[data-target = "episode-two"]').click(function(event){
         $(this).css('background-color', 'black')
                .css('color', 'yellow');
         $episodeTwo.css('background-color', 'black')
               .css('color', 'yellow');                         
         $allDesc.not(this).fadeOut();
         $episodeTwo.fadeIn(); 
         $allLinks.not(this).css("background-color", "").css("color","");
    }));
*/