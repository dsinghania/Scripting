// https://learn.jquery.com/using-jquery-core/document-ready/
// Knockout JS FrameWork
$(document).ready(function(){

    var url = "https://parkland-CSC175.github.io/csc175data/cars/car-makes.json";
    
    $.get(url, function(result){
         var viewModel = {
             carBrands:    ko.observableArray([]),
             brandToAdd:   ko.observable(""),
             countryToAdd: ko.observable(""),
             addCarBrands: function(){
                 if((this.brandToAdd() !== "") && (this.countryToAdd() !== "")){  
                     this.carBrands.push({
                         brand:   this.brandToAdd(),
                         country: this.countryToAdd()
                     });
                 } else {
                     alert("One of the input fields is empty");
                     return false;
                 } 
                 
                 //this.sortBrands();
                                  
                 this.brandToAdd("");       // Clear the text box           
                 this.countryToAdd("");                               
             },
             /*
             sortBrands: function() {
                 this.carBrands.sort(function(a,b){
                     return a.brand > b.brand ? 1 : -1;
                 });                    
             },  
             */           
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