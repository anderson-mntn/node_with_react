const express = require('express');
const app = express();

const videosUrls = [
    'KUIsVXKuVAk',
    'Z1G-aGAvGYw',
    'IEEpbRWhrVs',
]

app.get('/api/videos', (req, res) =>{
    res.send(videosUrls);
})

app.listen(3000, () =>{
    console.log("App running on port 3000")
})