var client = require("./keys.js");
var request = require('request');


var method = process.argv[2];
var argTwo = process.argv.slice(3).join(" ");

switch(method){

	case "my-tweets":
		client.twitterKeys.get('statuses/user_timeline', function(error, tweets, response) {
		  if(error) throw error;

		  for(var i = 0; i < tweets.length; i++){
		  	console.log(tweets[i].text);
		  }
		 
		});
		break;

	case "spotify-this-song":
			client.spotifyKeys.search({ type: 'track', query: argTwo, limit: 1 }, function(err, data) {
			  if (err) {
			    return console.log('Error occurred: ' + err);
			  }
			 for(var i = 0; i < data.tracks.items[0].artists.length; i++){
			 	console.log("Artists: " + data.tracks.items[0].artists[i].name);

			 }
			console.log("Song Name: ", data.tracks.items[0].name)
			console.log("Song Link: ", data.tracks.items[0].album.href)
			console.log("Album Name: ", data.tracks.items[0].album.name)
		});
		break;

	case "movie-this":

		if (argTwo === ""){
			argTwo = "Mr+Nobody";
		};

		var movieURL = "http://www.omdbapi.com/?t=" + argTwo +"&apikey=fbede96a";

		request(movieURL, function(error, response, body){
				if (argTwo === undefined) {
				    argTwo = 'Mr Nobody';
				  }

				 request(movieURL, function(error, response, body) {
				    if (!error && response.statusCode == 200) {
				      var data = [];
				      var jsonData = JSON.parse(body);
				      // console.log(jsonData)
				      console.log('Title: ' + jsonData.Title);
				      console.log('Year: ' + jsonData.Year);
				      console.log('Rated: ' + jsonData.Rated);
				      console.log('IMDB Rating: ' + jsonData.imdbRating);
				      console.log('Country: ' + jsonData.Country);
				      console.log('Language: ' + jsonData.Language);
				      console.log('Plot: ' + jsonData.Plot);
				      console.log('Actors: ' + jsonData.Actors);
				      console.log('Rotten Tomatoes Rating: ' + jsonData.Ratings[1].Value);
				  }

			});
		
		});

		break;

		case "do-what-it-says":

		break;

};

