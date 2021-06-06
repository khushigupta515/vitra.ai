const express = require('express');
const app = express();
const port = 8000;

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded());
app.use(express.static('./assets'));

//go to the routers folder
app.use('/',require('./router/index'));

//creating server
app.listen(port,function(err){
    if(err){console.log('Error occured in creating a server',err);return;}
    console.log('Server Up and running on port',port);
});
