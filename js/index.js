$(document).ready(function() {

  //step1 :use types the key words in the search box and then press enter to get the results
  $("#radnomArticle").click(function(){
    
    window.open("http://en.wikipedia.org/wiki/Special:Random");// random articles throught 
  });
  
  
  $("#searchBox").keypress(function(e) {

    if (e.which === 13 && $(this).val() != " ") {

      var apiLink = "http://en.wikipedia.org/w/api.php?action=opensearch&redirects=resolve&search=" + $(this).val() + "&callback=?";

  //step2:  use ajax to extract data 
      $.ajax({
        dataType: "jsonp",
        headers: {
          'Api-User-Agent': 'CodepenWikipediaSearch/0.1'
        },
        
        url: apiLink,
        
        //step3 : call back the searchResult function to show up the results
        success: function(searchResult) {

          var searchName = 1;
          var searchDescription = 2;
          var searchLink = 3;

         // $("#contentBox").append(searchResult[searchName]);
          //Step 4 : loop thorugh the search result name length  to get all the results that attached to a spcific word key.   
          for (var i =  0 ; i < searchResult[searchName].length ; i ++){
            
          //Step 5: show the content  by creating a new div 
         //search description is sliced to 150 characters and tuncate with          ...
              $("#contentBox").append("<div class='resultBox'> <a href='" + searchResult[searchLink][i] + "' target='_blank' id= 'res" + i + "' class='resultLink'><h3>" + searchResult[searchName][i] + "</h3></a> <p>" + searchResult [searchDescription][i].slice(0,150) + "....."+ "</p></div><br>");
          }

        }

      }); //end of ajax,

    }

  });

});