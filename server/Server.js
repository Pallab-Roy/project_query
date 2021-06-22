const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());


// convert json file use express
app.use(express.json());

// link router file(auth) from router folder
app.use(require("./router/auth"));
app.use('/api', require("./router/QA"));


app.listen(5000, () => {
    console.log('Server is running on 5000 port.')
})