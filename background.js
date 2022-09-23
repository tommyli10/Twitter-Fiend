chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    console.log("entered background.js")
    if (msg.message) {
        sendMsg(msg);
    } else {
        openTwitter();
    }
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
//twitter buttom event listener
// chrome.browserAction.onClicked.addListener(function (activeTab) {
//     var newURL = "https://twitter.com";
//     chrome.tabs.create({ url: newURL });
// });

function openTwitter() {
    var newURL = "https://twitter.com";
    chrome.tabs.create({ url: newURL });
}