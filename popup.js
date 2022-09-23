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
}


// go to twitter event
document.getElementById('twitter').addEventListener('click', openTwitter);

function openTwitter() {
    chrome.runtime.sendMessage({
        message: "",
        data: {
            subject: "Loading...",
            content: "Just completed!"
        }
    }, (res) => {
        console.log(res);
    })
}