// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){

    var url = "https://parkland-CSC175.github.io/csc175data/cars/car-makes.json";
    
    $.get(url, function(result){
         //console.log(result);
         var viewModel = {
             carBrands: ko.observableArray(),
             brandToAdd: ko.observable(""),
             countryToAdd: ko.observable(""),
             addCarBrands: function(){
                // brandInputValue = $("#brand-text").val();
                 //countryInputValue = $("#country-text").val();
                 if(brandToAdd() != "" && countryToAdd != ""){
                     console.log(brand + " " + countryToAdd);
                     carBrands.push({
                         brand: brandToAdd,
                         country: countryToAdd
                     })
                 }                
                else {
                // if(brandInputValue == "" || countryInputValue == ""){
                     alert("Brand or Country input field is empty");
                     return false;
                 }                     
                /* viewModel.carBrands.push({
                     brand: brandInputValue,
                     country: countryInputValue                        
                 })*/
             },
             removeRow: function(){
                 viewModel.carBrands.remove(this);
             },
             completed: false
         };
                     
         result.forEach(function(post){
            viewModel.carBrands.push({
                brand: post.make_display,
                country: post.make_country                        
            });
        }); 
            viewModel.carBrands.sort();        
            //links the viewModel to the html
             ko.applyBindings(viewModel);
    });
});   