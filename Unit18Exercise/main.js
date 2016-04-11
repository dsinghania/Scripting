// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
    
    console.log("hello world");

    var url = "https://parkland-CSC175.github.io/csc175data/cars/car-makes.json";
    
     $.get(url, function(result){
         console.log(result);
         var viewModel;       
         result.forEach(function(post){
             console.log(post);
             console.log(post.make_display);
             viewModel = {
                 carBrands: ko.observable([]), 
                 setJsonData: function(){
                     this.carBrands.push({
                         brand: post.make_display,
                         country: post.make_country                        
                     })
                 },               
                 addCarBrands: function(){
                     brandInputValue = $("#brand-text").val();
                     countryInputValue = $("#country-text").val();
                    
                     if(brandInputValue == "" || countryInputValue == ""){
                         alert("Brand or Country input field is empty");
                         return false;
                     }
                     this.carBrands.push({
                         brand: brandInputValue,
                         country: countryInputValue                        
                     })
                 }
             };
            //viewModel.carBrands.sort();
         });
            //console.log(viewModel.carBrands);
            //links the viewModel to the html
             ko.applyBindings(viewModel);
    });
});