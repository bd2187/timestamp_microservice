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

    const d = new Date(userInput);

    if (d === 'Invalid Date') {
        res.json({
            error: 'invalid date',
            userInput
        });
    } else {

        if (typeof Number(userInput) === 'number') {
            // get unix
        } else {
            // get readable date
        }
        
        
    }
    
    res.end('hello');
});


const port = 3000;
app.listen(port, () => { console.log(`Now listening to Port: ${port}`) });

const d = new Date();

console.log(d);
// const unix = d.getTime() / 1000;

// const foo = new Date(unix * 1000);
// console.log(foo.getUTCMonth(), foo.getUTCDate(), foo.getUTCFullYear());