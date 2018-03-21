const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.end('Hello');
});

app.get('/api/:date', (req, res) => {
    
    const userInput = req.params.date;
    const months = require('./months');
    const errorRes = {
        status: 'error',
        message: 'invalid date',
        userInput
    };
        
    if ( isNaN(Number(userInput / 1000)) ) {
        // get unix
        const unixTime  = new Date(userInput / 1000);
        const month     = months[unixTime.getUTCMonth()];
        const date      = unixTime.getUTCDate();
        const year      = unixTime.getUTCFullYear();
        
        if (isNaN(month)) {
            res.json(errorRes);
        } else {
            res.json({
                unix: userInput,
                date: `${month} ${date}, ${year}`
            });
        }

    } else {            
        // get readable date
        const unix = new Date(userInput).getTime() / 1000;
        
        if (isNaN(unix)) {
            res.json(errorRes);
        } else {
            res.json({
                unix,
                date: userInput
            });
        }
    }

});


const port = 3000;
app.listen(port, () => { console.log(`Now listening to Port: ${port}`) });