// Frisby test scripts to Update Robin and Flash characters in MongoDB.
// Created by: Jay A. Deguzman
//****************************************************************//
//****************************************************************//
// CHANGE LOG:
// 1. 05172016 - Initial creation
//****************************************************************//
//****************************************************************//
var frisby    = require("../node_modules/frisby");
//================================================================//
// Require frisby to be used.
//================================================================//
var characterID = []; // Declare array to store created _id
var characterName = []; // Declare array to store created name
var characterAlias = []; // Declare array to store created alias
var characterSpecies = []; // Declare array to store created species
var characterAbilities = []; // Declare array to store created abilities
var characterDescription = []; // Declare array to store created description
var characterWeakness = []; // Declare array to store created weakness
var i = 0; // Used to help define index counts
var j = 0; // Used to help define index counts
var k = 0; // Used to help define index counts
var h = 0; // Used to help define index counts
var l = 0; // Used to help define index counts
//================================================================//
// Declaring variables to be used for this test
//================================================================//
//#######################################################################################################
frisby.create("Get a list of the League and store them in placeholders")
    .get('http://localhost:3000/characters', {})
    .expectStatus(200)
    .afterJSON(function(body){
        var parseBody = body;
            while(parseBody[i] != undefined) { 
                characterID.push(parseBody[i]._id);
                characterName.push(parseBody[i].name);
                characterAlias.push(parseBody[i].alias);
                characterSpecies.push(parseBody[i].species);
                characterAbilities.push(parseBody[i].abilities);
                characterDescription.push(parseBody[i].description);
                characterWeakness.push(parseBody[i].weaknesses);
                i++;
            } 
            while(j != i) { 
                expect(parseBody[j]._id).toBe(characterID[k]); 
                expect(parseBody[j].name).toBe(characterName[k]);
                expect(parseBody[j].alias).toBe(characterAlias[k]); 
                expect(parseBody[j].species).toBe(characterSpecies[k]); 
                expect(parseBody[j].abilities).toBe(characterAbilities[k]); 
                expect(parseBody[j].description).toBe(characterDescription[k]); 
                expect(parseBody[j].weaknesses).toBe(characterWeakness[k]); 
                j++;
                k++;
            }
//================================================================//
// Getting data and placing them in arrays to use for validation 
// checks
//================================================================// 
    frisby.create("Update Robin to Nightwing")
        .put('http://localhost:3000/characters/' + characterID[6], {name: "Dick Grayson", alias: "Nightwing", species: "Human", abilities: "Peak human conditioning, Master Acrobat, Intimidation, Good Detective, Master Martial Artist, Weapon proficiency, Expert Marksman, Stealth, Expert Escapologist, Tracking", description: "Batman's first sidekick. A circus acrobat, and, with his parents, one of the Flying Graysons. While preparing for a performance, Dick overhears two gangsters attempting to extort protection money from the circus owner. The owner refuses, so the gangsters sabotage the trapeze wires with acid. During the next performance, the trapeze from which Dick's parents are swinging snaps, sending them to their deaths", weaknesses: "He is only human."})
        .expectStatus(200)
        .afterJSON(function(body){
            var parseBody = body;
            characterName[6] = parseBody.name;
            characterAlias[6] = parseBody.alias;
            characterSpecies[6] = parseBody.species;
            characterAbilities[6] = parseBody.abilities;
            characterDescription[6] = parseBody.description;
            characterWeakness[6] = parseBody.weaknesses;
                expect(parseBody.name).toBe("Dick Grayson"); 
                expect(characterName[6]).toBe("Dick Grayson"); 
                expect(parseBody.alias).toBe("Nightwing"); 
                expect(characterAlias[6]).toBe("Nightwing"); 
                expect(parseBody.species).toBe("Human");
                expect(characterSpecies[6]).toBe("Human");
                expect(parseBody.abilities).toBe("Peak human conditioning, Master Acrobat, Intimidation, Good Detective, Master Martial Artist, Weapon proficiency, Expert Marksman, Stealth, Expert Escapologist, Tracking"); 
                expect(characterAbilities[6]).toBe("Peak human conditioning, Master Acrobat, Intimidation, Good Detective, Master Martial Artist, Weapon proficiency, Expert Marksman, Stealth, Expert Escapologist, Tracking"); 
                expect(parseBody.description).toBe("Batman's first sidekick. A circus acrobat, and, with his parents, one of the Flying Graysons. While preparing for a performance, Dick overhears two gangsters attempting to extort protection money from the circus owner. The owner refuses, so the gangsters sabotage the trapeze wires with acid. During the next performance, the trapeze from which Dick's parents are swinging snaps, sending them to their deaths"); 
                expect(characterDescription[6]).toBe("Batman's first sidekick. A circus acrobat, and, with his parents, one of the Flying Graysons. While preparing for a performance, Dick overhears two gangsters attempting to extort protection money from the circus owner. The owner refuses, so the gangsters sabotage the trapeze wires with acid. During the next performance, the trapeze from which Dick's parents are swinging snaps, sending them to their deaths");
                expect(parseBody.weaknesses).toBe("He is only human.");
                expect(characterWeakness[6]).toBe("He is only human.");
//================================================================//
// Updating object Robin to Nightwing. Updating the array slot 
// Robin was stored in.
//================================================================// 
        frisby.create("Update Barry Allen to Jay Garrick")
            .put('http://localhost:3000/characters/' + characterID[3], {name: "Jay Garrick", alias: "The Flash", species: "Human", abilities: "Accelerated Healing, Decelerated Aging, Speed Mirage, Phasing, Superhuman Stamina, Steal Speed, Superhuman Speed, Vortex Creations", description: "A college student who accidentally inhales hard water vapors after taking a smoke break in his laboratory where he had been working. As a result, he finds that he can run at superhuman speed and has similarly fast reflexes. After a brief career as a college football star, he dons a red shirt with a lightning bolt and a stylized metal helmet with wings (based on images of the Roman god Mercury) then begins to fight crime as the Flash. The helmet belonged to Jay's father, Joseph, who fought during World War I. He sometimes uses the helmet as a weapon or type of shield. Notable foes are the Fiddler, the Thinker, and the Shade", weaknesses: "Vulnerable to sharp objects, projectiles, and explosions."})
            .expectStatus(200)
            .afterJSON(function(body){
                var parseBody = body;
                characterName[3] = parseBody.name;
                characterAlias[3] = parseBody.alias;
                characterSpecies[3] = parseBody.species;
                characterAbilities[3] = parseBody.abilities;
                characterDescription[3] = parseBody.description;
                characterWeakness[3] = parseBody.weaknesses;
                    expect(parseBody.name).toBe("Jay Garrick"); 
                    expect(characterName[3]).toBe("Jay Garrick"); 
                    expect(parseBody.alias).toBe("The Flash"); 
                    expect(characterAlias[3]).toBe("The Flash"); 
                    expect(parseBody.species).toBe("Human");
                    expect(characterSpecies[3]).toBe("Human");
                    expect(parseBody.abilities).toBe("Accelerated Healing, Decelerated Aging, Speed Mirage, Phasing, Superhuman Stamina, Steal Speed, Superhuman Speed, Vortex Creations"); 
                    expect(characterAbilities[3]).toBe("Accelerated Healing, Decelerated Aging, Speed Mirage, Phasing, Superhuman Stamina, Steal Speed, Superhuman Speed, Vortex Creations"); 
                    expect(parseBody.description).toBe("A college student who accidentally inhales hard water vapors after taking a smoke break in his laboratory where he had been working. As a result, he finds that he can run at superhuman speed and has similarly fast reflexes. After a brief career as a college football star, he dons a red shirt with a lightning bolt and a stylized metal helmet with wings (based on images of the Roman god Mercury) then begins to fight crime as the Flash. The helmet belonged to Jay's father, Joseph, who fought during World War I. He sometimes uses the helmet as a weapon or type of shield. Notable foes are the Fiddler, the Thinker, and the Shade"); 
                    expect(characterDescription[3]).toBe("A college student who accidentally inhales hard water vapors after taking a smoke break in his laboratory where he had been working. As a result, he finds that he can run at superhuman speed and has similarly fast reflexes. After a brief career as a college football star, he dons a red shirt with a lightning bolt and a stylized metal helmet with wings (based on images of the Roman god Mercury) then begins to fight crime as the Flash. The helmet belonged to Jay's father, Joseph, who fought during World War I. He sometimes uses the helmet as a weapon or type of shield. Notable foes are the Fiddler, the Thinker, and the Shade");
                    expect(parseBody.weaknesses).toBe("Vulnerable to sharp objects, projectiles, and explosions.");
                    expect(characterWeakness[3]).toBe("Vulnerable to sharp objects, projectiles, and explosions.");     
//================================================================//
// Updating object Barry Allen to Jay Garrick. Updating the array 
// slot Barry was stored in.
//================================================================// 
                frisby.create("Get a list of the updated League roster")
                    .get('http://localhost:3000/characters', {})
                    .expectStatus(200)
                    .afterJSON(function(body){
                        var parseBody = body;
                            while(h != i) { 
                            expect(parseBody[h]._id).toBe(characterID[l]); 
                            expect(parseBody[h].name).toBe(characterName[l]);
                            expect(parseBody[h].alias).toBe(characterAlias[l]); 
                            expect(parseBody[h].species).toBe(characterSpecies[l]); 
                            expect(parseBody[h].abilities).toBe(characterAbilities[l]); 
                            expect(parseBody[h].description).toBe(characterDescription[l]); 
                            expect(parseBody[h].weaknesses).toBe(characterWeakness[l]); 
                            h++;
                            l++;
                            }     
//================================================================//
// Retrieve list of objects and verify they match with the data 
// stored in the array
//================================================================// 
                })
            .toss();  // Get a list of the updated League roster      
            })
        .toss(); // Update Barry Allen to Jay Garrick          
        })
    .toss(); // Update Robin to Nightwing
    })
.toss(); // Get a list of the League and store them in placeholders
//================================================================//
// Ending of frisby.creates and generates resulting spec test
//================================================================// 