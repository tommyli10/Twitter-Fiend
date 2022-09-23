chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    console.log("entered background.js")
    sendMsg(msg);
    // console.log(msg)
    // return true;
    // https://powerful-island-90704.herokuapp.com/https://pokeapi.co/api/v2/ability/2

    // fetch(`https://pokeapi.co/api/v2/pokemon/${msg}`)
    // , {
    //     method: 'GET',
    //     // headers: { "Access-Control-ALlow-Origin": "*" }
    //     // body: JSON.stringify("test")
    // }
    // .then(data => data.json())
    // .then(data => console.log(data))
    // .catch(err => console.log(err))
});

const URL = 'https://thawing-ocean-48836.herokuapp.com/twitterAPI'

function sendMsg(msg) {
    const tweetMsg = msg.message;
    // console.log(tweetMsg)
    const body = { 'message': tweetMsg }
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((parsed) => console.log(parsed))
}