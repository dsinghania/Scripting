/*jquery events
console.log("Hello World!");
$(document).ready(function(){
    
    // execute our page logic when the 
    // entire webpage has finished loading
    doSomething();
    
   //$("#menu");
   //$("#menu button"); 
    
});

function doSomething(){
    //blah
}

//keep track of your variables and name it descriptive !!
var someDiv = null;
var $someOtherDiv = null;

//indentation !!
if(true){
    
    if(false){
        
        if(2==2){
            
        }
    }
}
*/
$(document).ready(function(){
    
    $("#menu button").click(function(evt){
       
       /*
       console.log(evt);
       console.log(evt.target);
       console.log(this);           
       
       //$(evt.target).css('color', 'green');
       
       $(this).css('color', 'green');      
       
       doMoreWork(this); 
       */
    });   
    
    //how event handlers can get tricky
    $("#menu").click(function(e){
        
        console.log(this);          //the ul #menu
        console.log(e.target);      // the element firing the 'click' event
        
        //get the data-anything attribute from the clicked button
        //var attr = $(e.target).getAttribute("data-anything");
        var attr = $(e.target).data("anything");
        console.log(attr);
    });
    
    //other events inside 'click'
    $("#one").mouseover(function(){
        $(this).css('background-color','purple');
    });
    
    $(document).keydown(function(e){
        console.log(e);
        alert("what are you doing??");
    });
 });

function doMoreWork(elem){
    
    $(elem).css('color','purple');
}