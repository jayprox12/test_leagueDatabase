var express = require('express'),
    path = require('path'),
    character = require('./routes/characters');

var app = express();


app.configure(function () {
    app.use(express.logger('dev')); /* 'default', 'short', 'tiny', 'dev' */
   app.use(express.bodyParser());
});

app.get('/characters', character.findAll);
app.get('/characters/:id', character.findById);
app.post('/characters', character.addCharacter);
app.put('/characters/:id', character.updateCharacter);
app.delete('/characters/:id', character.deleteCharacter);



app.listen(3000);
console.log('Listening on port 3000....');