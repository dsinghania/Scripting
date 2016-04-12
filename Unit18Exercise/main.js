// https://learn.jquery.com/using-jquery-core/document-ready/
// Knockout JS FrameWork
$(document).ready(function(){

    var url = "https://parkland-CSC175.github.io/csc175data/cars/car-makes.json";
    
    $.get(url, function(result){
         var viewModel = {
             carBrands:    ko.observableArray(),
             brandToAdd:   ko.observable(""),
             countryToAdd: ko.observable(""),
             addCarBrands: function(){
                 if((this.brandToAdd !== "") && (this.countryToAdd !== "")){    //letting me add empty values
                 //if((this.brandToAdd.length > 0) && (this.countryToAdd.length > 0)){  //showing alert every time
                     this.carBrands.push({
                         brand:   this.brandToAdd,
                         country: this.countryToAdd
                     });
                 } else {
                     alert("One of the input fields is empty");
                     return false;
                 }     
                 //this.carBrands.sort();
             },
             removeRow: function(){
                 viewModel.carBrands.remove(this);
             }
         };
         //viewModel.carBrands(result);         
         result.forEach(function(post){
             viewModel.carBrands.push({
                 brand:   post.make_display,
                 country: post.make_country                        
             });
        }); 
        //viewModel.carBrands().sort();    
        //links the viewModel to the html
        ko.applyBindings(viewModel);
    });
});   