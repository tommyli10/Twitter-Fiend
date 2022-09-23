console.log('loaded')

document.getElementById('submit').addEventListener('click', sendMessage)
//{Authorization: OAuth oauth_consumer_key="H24jacYAEfMafe1Uitu3jEDzO",oauth_token="301875389-qpyhlceucRGkITCOQEw3uZaJ9Gf4VcsHknI6oQUd",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1663826915",oauth_nonce="3gIokAfOm2S",oauth_version="1.0",oauth_signature="KqHzUjJSy0nOhczSRljTT0U4cxM%3D"

document.getElementById('submit').addEventListener('click', sendMessage)

function sendMessage() {
    const inputField = document.getElementById('messageInput');
    const msg = inputField.value;

    // clear input field after message is savedf
    inputField.value = '';

    if (msg) {
        chrome.runtime.sendMessage({
            message: msg,
            data: {
                subject: "Loading...",
                content: "Just completed!"
            }
        }, (res) => {
            console.log(res);
        })
    }

    // // send a post request the old fashioned way to 'https://api.twitter.com/2/tweets'
    // fetch('https://api.twitter.com/2/tweets', {
    //     method: 'POST',
    //     headers: { 'Access-Control-Allow-Origin': '*' },
    //     // headers: 'Authorization: OAuth oauth_consumer_key="H24jacYAEfMafe1Uitu3jEDzO",oauth_token="301875389-qpyhlceucRGkITCOQEw3uZaJ9Gf4VcsHknI6oQUd",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1663826915",oauth_nonce="3gIokAfOm2S",oauth_version="1.0",oauth_signature="KqHzUjJSy0nOhczSRljTT0U4cxM%3D"',
    //     body: JSON.stringify({
    //         text: "hello world"
    //     })
    //     //pass all the authentication info into the header
    //     //in the body create a json object with the key of text adn the value of whateer we typed in the input box
    // })
    //     .then(data => data.json())
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))
}