const express = require('express');
const app = express();
const OAuth = require('oauth-1.0a');
const axios = require('axios');
const crypto = require('node:crypto');
// const { createHmac } = await import('node:crypto');



app.get('/', (req, res) => {
    res.send('got it')
})

app.post('/twitter/tweet', async (req, res) => {
    try {
        const oauth = OAuth({
            consumer: {
                key: 'f9o2vpwoOagYs62Wg7RaETFSi',
                secret: 'vdn5oamBVzTemSDtqMlFReQqeG4jD7inEKTFbgp2BFXazgNf0g'
            },
            signature_method: 'HMAC-SHA1',
            hash_function: (baseString, key) => crypto.createHmac('sha1', key).update(baseString).digest('base64')
        });

        const token = {
            key: '1572817978143670272-VpV8fJuORyMbLkUyU7gGdZbG59BXeT',
            secret: 'jxXzmXAq4nxWCeq9EWqNxnHHBg8XXw3MnAPBhvejQykzW'
        };

        const authHeader = oauth.toHeader(oauth.authorize({
            url: 'https://api.twitter.com/2/tweets',
            method: 'POST'
        }, token));

        const randNum = Math.floor(Math.random() * 10000);
        const data = { "text": `test tweet ${randNum}` };

        await axios.post('https://api.twitter.com/2/tweets',
            data,
            {
                headers: {
                    Authorization: authHeader["Authorization"],
                    'user-agent': "v2CreateTweetJS",
                    'content-type': "application/json",
                    'accept': "application/json"
                }
            }
        );

        res.status(201).send({ message: "Tweet successful" });
    } catch (error) {
        console.log("error", error)
        res.status(403).send({ message: "Missing, invalid, or expired tokens" });
    }
});

app.listen(8080, () => {
    console.log('Inside localhost 8080')
})
