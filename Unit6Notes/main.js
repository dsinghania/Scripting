//console.log("Hello World!");
var blogArticle = {
    title: "Advanced Performance Audits With DevTools",
    author: "Paul Irish",
    publishedOn: "Mar 27th, 2015",
    url: "http://www.paulirish.com/2015/advanced-performance-audits-with-devtools/",
    content: {
        heading: "To Start With...",
        paragraph: "In this doc, we look at the scrolling of CNET, input latency on CNET, some very interesting challenges on the responsive Time.com, and infinite scroll on Google Play’s desktop site."
    }
};

var h1 = document.getElementById("title")
h1.innerHTML = blogArticle.title;

/*var elArray = document.getElementsByClassName("author");
var h2Author = elArray[0];*/

var h2Author = document.getElementsByClassName("author")[0];
h2Author.innerHTML = blogArticle.author;

var h2Publish = document.getElementsByClassName("published")[0];
h2Publish.innerHTML = blogArticle.publishedOn;

var divContent = document.getElementsByClassName("content-wrapper")[0];

var h3Content = document.createElement("h3");
divContent.appendChild(h3Content);
h3Content.innerHTML = blogArticle.content.heading;
h3Content.className = "article-heading";

var pContent = document.createElement("p");
divContent.appendChild(pContent);
pContent.innerHTML = blogArticle.content.paragraph;
pContent.style = "color: green;";

