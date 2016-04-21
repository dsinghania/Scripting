$(document).ready(function(){
    
    var apiKey = "rskfj6um88m9ksq9e5dmfdn6";
  
    $("#btn-apikey").click(function(){
        apiKey = prompt("Please Enter your API Key");
        localStorage.setItem("BEST_BUY_API_KEY", apiKey);
    });
                
    var url = getUrl();
    
    var newUrl = "https://api.bestbuy.com/v1/categories(id=pcmcat209400050001|id=abcat0501000|id=abcat0401000"+
                "|id=pcmcat242800050021|id=abcat0204000|id=pcmcat241600050001|id=pcmcat254000050002|id=pcmcat209000050006" +
                "|id=abcat0502000|id=pcmcat232900050000|id=pcmcat295700050012|id=pcmcat310200050004|id=pcmcat243400050029|" + 
                "id=abcat0904000|id=abcat0901000|id=abcat0912000|id=abcat0101000|id=abcat0910000|id=pcmcat273800050036)" +
                "?show=all&page=2&format=json&apiKey=rskfj6um88m9ksq9e5dmfdn6";    
                
     var $categoryId = $("#category");
     
     addData(url);
     addData(newUrl);
     
    $("#category").on("click", "a", function(event){    
        var $linkClicked = $(event.target);    
        console.log($linkClicked);
        var $dataId = $linkClicked.data("id");
        console.log($dataId);
        sessionStorage.setItem("dataId", $dataId);
        this.href = "categories-list.html";
    });
    
    function getUrl(){
        apiKey = apiKey || localStorage.getItem("BEST_BUY_API_KEY");
        return "https://api.bestbuy.com/v1/categories(id=pcmcat209400050001|id=abcat0501000|id=abcat0401000"+
               "|id=pcmcat242800050021|id=abcat0204000|id=pcmcat241600050001|id=pcmcat254000050002|id=pcmcat209000050006" +
               "|id=abcat0502000|id=pcmcat232900050000|id=pcmcat295700050012|id=pcmcat310200050004|id=pcmcat243400050029" + 
               "|id=abcat0904000|id=abcat0901000|id=abcat0912000|id=abcat0101000|id=abcat0910000|id=pcmcat273800050036)" +
               "?show=all&page=1&format=json&apiKey=" + apiKey;
    }
    
    function addData(url){
        $.get(url, function(result){
            console.log(result);
            result.categories.forEach(function(post){
                console.log(post);             
                var $li = $("<li></li>");
                var $a = $("<a />").attr('href', "#").attr("data-id", post.id).text(post.name);
                $li.append($a);
                $categoryId.append($li); 
            });
        });
    }
});

         /*          
        var tableElem, rowElem, colElem, ctr =0;    
        var divElement = document.getElementsByClassName(".col-md-12")[0];
        tableElem = document.createElement('table');
        var headElem = document.createElement('th');
        headElem.appendChild(document.createTextNode("Categories"));
        tableElem.appendChild(headElem);
        
        var numRow = result1.categories.length / 5;
        var numCol = result1.categories.length / numRow;
        for (var i = 0; i < numRow; i++) {
            rowElem = document.createElement('tr');
            for (var j = 0; j < numCol; j++,ctr++) {
                colElem = document.createElement('td');
                colElem.appendChild(document.createTextNode(result1.categories[ctr].name));
                rowElem.appendChild(colElem);
            }
            tableElem.appendChild(rowElem);
        }
        document.body.appendChild(tableElem);
        
  
    /*var url = "https://api.bestbuy.com/v1/categories?format=json&apiKey=rskfj6um88m9ksq9e5dmfdn6";  //all categories
    //           https://api.bestbuy.com/v1/categories?&page=2&callback=JSON_CALLBACK&format=json
    var url = "https://api.bestbuy.com/v1/categories(id=pcmcat209400050001|id=abcat0501000|id=abcat0401000"+
                "|id=pcmcat242800050021|id=abcat0204000|id=pcmcat241600050001|id=pcmcat254000050002|id=pcmcat209000050006" +
                "|id=abcat0502000|id=pcmcat232900050000|id=pcmcat295700050012|id=pcmcat310200050004|id=pcmcat243400050029|" + 
                "id=abcat0904000|id=abcat0901000|id=abcat0912000|id=abcat0101000|id=abcat0910000|id=pcmcat273800050036)" +
                "?show=all&format=json&apiKey=rskfj6um88m9ksq9e5dmfdn6";*/
        