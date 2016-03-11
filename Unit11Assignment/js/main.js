// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
        
    console.log("Jquery events!");
    
    var $myTable =  $("#my-table tr");
    
    $myTable.hover(function(){
        $(this).css("background-color", "yellow");
        },  function() {
        $( this ).css("background-color", "");
    });
    
    //$("#my-table button").click(function(e){
    $("#my-table").on("click", "button", function(e){
              
        //var $buttonClicked = $(this)[0].getAttribute("title");
        var $buttonClicked = $(this)[0].getAttribute("data-action");
        
        //var $buttonClicked = $(e.target)[0].className;              //data("action");
        //console.log($buttonClicked);
        
        if($buttonClicked === "remove")
            $(this).closest('tr').remove();
            
        //var $attr = $("#my-table th[data-column='5']");
        //console.log($attr); 
        
        var $row = $(this).closest('tr'); 
        //console.log($row);
        
        var $unitsValue = $row.find("td:nth-child(5)")[0];
        //console.log($unitsValue);
        
        var $totalValue =  $row.find("td:nth-child(7)")[0];
        //console.log($totalValue);
        
        if($buttonClicked === "increaseQty"){
        //if($buttonClicked === "glyphicon glyphicon-plus"){  
             
            //var $unitsValue = $(this).closest('tr')[0].childNodes[9];
            //console.log(parseInt($unitsValue.innerText));
            
            var $newUnitsValue = parseInt($unitsValue.innerText) + 1;
            //console.log($newUnitsValue);
            
            $unitsValue.innerText = $newUnitsValue;
            
            //var $totalValue =  $(this).closest('tr')[0].childNodes[13];
            //console.log($totalValue);
            
            var $newTotalValue = parseFloat($totalValue.innerText) + 1;
            //console.log($newTotalValue);
            
            $totalValue.innerText = $newTotalValue;
        }
        
        if($buttonClicked === "decreaseQty"){
        //if($buttonClicked === "glyphicon glyphicon-minus"){   

            var $newUnitsValue = parseInt($unitsValue.innerText) - 1;
            //console.log(newValue);
            
            $unitsValue.innerText = $newUnitsValue;
            
            var newTotalValue = parseFloat($totalValue.innerText) - 1;
            //console.log(newTotalValue);
            
            $totalValue.innerText = newTotalValue;
        }
    });
});