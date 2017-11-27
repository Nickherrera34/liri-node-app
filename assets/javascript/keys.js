var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
// var OMDB = require('omdb')
 
var twitterKeys = new Twitter({
  consumer_key: 'LLR88uEKOaCoZf45nccroFWkW',
  consumer_secret: '1kr4JXnTz4NxvDvwjUK1JzZwxXK77toGCPjwEiormhKstsc0CY',
  access_token_key: '934094804580995073-zPQvOIE5p1qnGLGSTPJIwGAhh2JgSK2',
  access_token_secret: 'GjqD6hdL6UdMMowbZxH20cTXE9W1eqvUTXzY3Rnw685Lh',
});

var spotifyKeys = new Spotify({
	id: 'fdb6c430248f48ceb811876daee311f2',
  	secret: '16b4cd173e4a42cbb265da9143150338'
});

module.exports = {
	twitterKeys: twitterKeys,
	spotifyKeys: spotifyKeys,
	// omdbKeys: omdbKeys
}

// var omdbKeys = new OMDB({
// 	key: "fbede96a"
// });