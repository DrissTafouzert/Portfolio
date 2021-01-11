const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/portfolio'));
app.get('/*',function(req, res)
{
    req.sendFile(path.join(__dirname+'/dist/portfolio/index.html'));
});
app.listen(process.env.PORT || 8080);