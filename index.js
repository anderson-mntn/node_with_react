const { error } = require('console');
const express = require('express');
const app = express();
const path = require('path')
require('dotenv').config();

const videosUrls = [
    'KUIsVXKuVAk',
    'Z1G-aGAvGYw',
    'IEEpbRWhrVs',
]

app.get('/api/videos', (req, res) =>{
    res.send(videosUrls);
})

if(process.env.NODE_ENV != 'development'){
    app.use(express.static(path.join(__dirname, 'front-react/build')))
    
    app.get('*', (req, res) =>{
        res.sendFile(path.join(__dirname, 'front-react/build/index.html'), function(error){})
        if(error){
            res.status(500).send(error);
        }
    })
    
    app.listen(3000, () =>{
        console.log("App running")
    })
}
