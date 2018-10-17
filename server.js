var express = require('express'),
    path = require('path'),
    character = require('./routes/characters');

var app = express();

// REMOVED IN EXPRESS 4
app.configure(function () {
    app.use(express.logger('dev')); /* 'default', 'short', 'tiny', 'dev' */
   app.use(express.bodyParser());
});  
// REMOVED IN EXPRESS 4. See: https://github.com/expressjs/express/wiki/Migrating-from-3.x-to-4.x

app.get('/characters', character.findAll);
app.get('/characters/:id', character.findById);
app.post('/characters', character.addCharacter);
app.put('/characters/:id', character.updateCharacter);
app.delete('/characters/:id', character.deleteCharacter);



app.listen(3000);
console.log('Listening on port 3000....');