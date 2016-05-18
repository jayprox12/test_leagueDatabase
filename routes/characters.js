var mongo = require('mongodb');
var db_name = 'Agamemnon';
var coll_name = 'tob';

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db(db_name, server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to \'" + db_name + "\' database");
        db.collection(coll_name, {strict:true}, function(err, collection) {
            if (err) {
                console.log("The \'" + coll_name + "\' collection doesn't exist. Creating it with starting entries...");
                populateDB();
            }
        });
    }
});

exports.findById = function(req, res) {
    var id = req.params.id;
    var obj_id = new require('mongodb').ObjectID(id); 
    //var obj_id = BSON.ObjectID.createFromHexString(id); //can also work
    console.log('Retrieving bio entry: ' + obj_id);
    db.collection(coll_name, function(err, collection) {
        collection.findOne({'_id':obj_id}, function(err, item) {
            res.send(item);
        });
    });
};

exports.findAll = function(req, res) {
    db.collection(coll_name, function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.addCharacter = function(req, res) {
    var char = req.body;
    console.log('Adding bio entry: ' + JSON.stringify(char));
    db.collection(coll_name, function(err, collection) {
        collection.insert(char, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error adding bio entry: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
}

exports.updateCharacter = function(req, res) {
    var id = req.params.id;
    var obj_id = new require('mongodb').ObjectID(id);
    var char = req.body;
    console.log('Updating bio entry: ' + obj_id);
    console.log(JSON.stringify(char));
    db.collection(coll_name, function(err, collection) {
        collection.update({'_id':obj_id}, char, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating bio entry: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(char);
            }
        });
    });
}

exports.deleteCharacter = function(req, res) {
    var id = req.params.id;
    var obj_id = new require('mongodb').ObjectID(id);
    console.log('Deleting bio entry: ' + obj_id);
    db.collection(coll_name, function(err, collection) {
        collection.remove({'_id':obj_id}, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error deleting bio entry: ' + err);
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}
/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample Justice League data. Really to be only used once, and that 
// is the first time the application is started.
// Most likely this code is not found in a real-life app because the database would already exist.
var populateDB = function() {
    
    var tob = [
    {
        name: "Clark Kent",
        alias: "Superman",
        species: "Kryptonian",
        abilities: "Superhuman strength, Superhuman speed, Superhuman hearing, X-Ray vision, Heat vision, Freeze breath, Flight, Invulnerability",
        description: "Superman is the last son of the dead planet Krypton, rocketed away as an infant by his father who believed that the planet was about to explode. Arriving on Earth, the child was taken in by Jonathan and Martha Kent, who raised him as their own child. As he grew up, he discovered that due to this solar system's yellow sun, he had fantastic powers, of flight, speed, strength, endurance and enhanced senses. He decided to us these powers for good, ultimately becoming a hero, given his name by reporter Lois Lane, with whom he would come to work at the Daily Planet in his civilian identity Superman carries the most respect from the Western world that any super-hero has ever known and is proud to represent both America and the world. He serves on the JLA, debatably as the team's leader.",
        weaknesses: "Kryptonite"
    },
    {
        name: "Classified",
        alias: "Batman",
        species: "Human",
        abilities: "No superpowers. Genius Intellect, Physical Prowess, Knowledge in Martial Arts, Detective skills, Knowledge in science and technology, multiple number of High-tech gadgets and vehicles",
        description: "The protector of Gotham City, a man dressed like a bat who fights against evil and strikes terror into the hearts of criminals everywhere. Although he has no superhuman powers, he is one of the world's smartest men and greatest fighters. His physical prowess and technical ingenuity make him an incredibly dangerous opponent. He is also a founding member of the Justice League. Non-superpowered hero that can hold it down with the best of them.",
        weaknesses: "He is only human. Distractions: Hostages, especially friends and family (Use heavy caution)"
    },
    {
        name: "Diana Prince",
        alias: "Wonder Woman",
        species: "Demigoddess",
        abilities: "Superhuman strength, speed, agility, durability, endurance and reflexes Agelessness Flight Master hand-to-hand combatant Utilizes indestructible bracelets and the Lasso of Truth",
        description: "A founding member of the Justice League, Wonder Woman was sculpted from clay by her mother Hippolyta, and received life and superhuman powers as blessings from the Olympian deities, combined with her Amazonian-training' helped to develop a wide range of extraordinary skills in both hunting and fighting",
        weaknesses: "If convinced, she could be trapped in a neverending cycle of combat against a phantom opponent"
    },
    {
        name: "Hal Jordan",
        alias: "Green Lantern",
        species: "Human",
        abilities: "Power ring",
        description: "a member and occasionally leader of the intergalactic police force called the Green Lantern Corps. He fights evil across the Universe with a ring that grants him a variety of superpowers",
        weaknesses: "Fear, Energy from Yellow Lantern"
    },
    {
        name: "Barry Allen",
        alias: "The Flash",
        species: "Human",
        abilities: "Super-speed, fast-healing",
        description: "A founding memeber of the Justice League and an assistant scientist from the Criminal and Forensic Science Division of Central City Police Department. Barry has a reputation for being very slow, deliberate, and frequently late, which frustrated his fiancée, Iris West.",
        weaknesses: "Vulnerable to sharp objects, projectiles, and explosions"
    },
    {
        name: "J'onn J'onzz",
        alias: "Martian Manhunter",
        species: "Martian",
        abilities: "Superhuman strength, speed, durability and endurance Regenerative healing factor Flight Invulnerability Intangibility/Phasing Invisibility Shapeshifting Telekinesis Telepathy Martian vision Nine senses Genius-level intellect",
        description: "From the planet Mars and the last surviving member of his race. A martian holocaust killed his wife and daughter, nearly driving him mad, until he was brought to Earth in an accident caused by scientist Saul Erdel.",
        weaknesses: "Fire"
    },
    {
        name: "Arthur Curry",
        alias: "Aquaman",
        species: "Martian",
        abilities: "Breathe underwater, swim at high speeds, Communicate telepathically with sea life, superhuman strength, enhanced senses, nearly impenetrable skin",
        description: "The telepathic ruler of Atlantis and the Earth's oceans, an Atlantean with incredible strength and speed as well as the ability to command all sea-life. His unique physiology allows him to survive on land and at the ocean's greatest depths of pressure and temperature. Given the names Orin through his royal heritage and Arthur Curry by his human upbringing, he fights to protect both worlds using his mighty abilities and political influence. He is a founding member of the Justice League.",
        weaknesses: "Possibility of aquaphobia (Maybe use Scarecrow's fear gas)"
    },
    {
        name: "Dick Grayson",
        alias: "Robin",
        species: "Human",
        abilities: "Peak human conditioning, Master Acrobat, Stealth, Expert Escapologist, Tracking",
        description: "Batman's first sidekick. A circus acrobat, and, with his parents, one of the \"Flying Graysons\". While preparing for a performance, Dick overhears two gangsters attempting to extort protection money from the circus owner. The owner refuses, so the gangsters sabotage the trapeze wires with acid. During the next performance, the trapeze from which Dick's parents are swinging snaps, sending them to their deaths",
        weaknesses: "He is only human."
    },
    {
        name: "Oliver Queen",
        alias: "Green Arrow",
        species: "Human",
        abilities: "Acrobatics, Archery, Aviation, Martial Arts, Swordsmanship",
        description: "A vigilante superhero who fights crime using archery, martial arts and technology. In his secret identity he is Oliver Queen, living in Star City as a wealthy playboy and billionaire industrialist turned outspoken socially-progressive politician. Marooned on an island for five years before he was discovered and eventually rescued.",
        weaknesses: "He is only human. Incapacitate his arm"
    }];
    
    db.collection('tob', function(err, collection) {
        collection.insert(tob, {safe:true}, function(err, result) {});
        console.log("Justice League entries have been added");
    });
};