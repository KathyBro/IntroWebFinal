$(document).ready(function(){
    $.ajax({
        url: 'http://quotes.rest/qod.json',
        type: 'GET',
        dataType: 'json',
        success: function(response) {
          console.log(response);
          document.getElementById("quote").innerHTML = response.contents.quotes[0].quote
          document.getElementById("qTitle").innerHTML = response.contents.quotes[0].title
          console.log(response.contents.quotes[0].background);
          document.getElementById("qback").style.backgroundImage = "url("+response.contents.quotes[0].background+")"
        }
    });
});