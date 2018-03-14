//Array of musicians
var topics = ["Beyonce", "Kanye","Rihanna", "Drake", "Jay-Z", "Cardi B", "Taylor Swift"];

function displayGifs(){
    var gif = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=VQ3pMYT3vAQaJuZ4LQb8zOkqWl6DzVlL&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function(response) {
      
        var results = response.data;

        for (var i=0; i < results.length; i++) {
        
    
      var gifDiv = $("<div class ='gifs'>");


      var displayRating = $("<p>").text("Rating: " + results[i].rating);

    
    gifDiv.append(displayRating);
    var gifImage = $("<img>"); 

    gifImage.attr("src", results[i].images.fixed_height_still.url); 

    gifDiv.append(gifImage); 
    
    $("#gifs-view").prepend(gifDiv);

        }  
    });
}
function renderButtons() {
    $("buttons-view").empty();

    for (var i=0; i < topics.length; i++) {
        var add = $("<button>");
        add.addClass("gif-btn");
        add.attr("data-name", topics[i]);
        add.text(topics[i]);
        $("#buttons-view").append(add);
    }
}

$("#add-gif").on("click", function(event){
    event.preventDefault();
    var gif = $("#gif-input").val().trim();
    topics.push(gif);
    renderButtons();
});

$(document).on("click", ".gif-btn", displayGifs);

renderButtons();

$(".gifs").on("click", function(){
    gifImage.attr("src", results[i].images.fixed_height_downsampled.url);
});
