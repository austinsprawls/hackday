var public_key = "g-KCEX7N4q6RKOPzhs5dFe-cR8Y",
provider = "foursquare";
OAuth.initialize('g-KCEX7N4q6RKOPzhs5dFe-cR8Y')
OAuth.popup('foursquare').done(function(result) {
    console.log(result)
    // do some stuff with result
}).fail(function (error) {
    // Handle errors
    console.log("dammit!");
});



// {
//     access_token: 'string' #if OAuth2
//     oauth_token: 'string' #if OAuth1
//     oauth_token_secret: 'string' #if OAuth1
//     expire_in: 'timestamp' #optional
// }





result.me().done(function(data) {
    console.log(data);
    // do something with `data`, e.g. print data.name
})

// You can now make simple HTTP calls using these functions: result.get(url, settings), result.post(url, settings), result.put(url,
// settings), result.delete(url, settings), result.patch(url, settings)