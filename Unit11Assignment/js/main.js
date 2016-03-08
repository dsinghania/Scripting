// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    
    console.log("hello world!");
    
    var $myTable =  $("#my-table tr");
    $myTable.hover(function(){
        $(this).css("background-color", "yellow");
        },  function() {
        $( this ).css("background-color", "");
    });
    
    $("#my-table button").click(function(e){
        
        //var target = $(this);
        //console.log(target);
        
        var $buttonClicked = $(this)[0].getAttribute("title");
        //console.log($buttonClicked);
        
        if($buttonClicked === "remove")
            $(this).closest('tr').remove();
            
        //var $attr = $("#my-table th[data-column='5']");
        //console.log($attr); 
        
        if($buttonClicked === "increase qty"){
            
            var $unitsValue = $(this).closest('tr')[0].childNodes[9];
            //console.log($unitsValue);
            
            var newUnitValue = parseInt($unitsValue.innerText) + 1;
            //console.log(newValue);
            $unitsValue.innerText = newUnitValue;
            
            var $totalValue =  $(this).closest('tr')[0].childNodes[13];
            //console.log($totalValue);
            
            var newTotalValue = parseFloat($totalValue.innerText) + 1;
            //console.log(newTotalValue);
            
            $totalValue.innerText = newTotalValue;
        }
        
         if($buttonClicked === "decrease qty"){
             
            var $unitValue = $(this).closest('tr')[0].childNodes[9];
            //console.log($unitsValue);
            
            var $newUnitValue = parseInt($unitValue.innerText) - 1;
            //console.log(newValue);
            $unitValue.innerText = $newUnitValue;
            
            var $totalsValue =  $(this).closest('tr')[0].childNodes[13];
            //console.log($totalValue);
            
            var newTotalsValue = parseFloat($totalsValue.innerText) - 1;
            //console.log(newTotalValue);
            
            $totalsValue.innerText = newTotalsValue;
        }
        
    });
});