// Frisby test scripts to Retrieve characters in MongoDB and verify 
// the changes have been made.
//
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
        frisby.create("Retrieve data on Oliver Queen")
            .get('http://localhost:3000/characters/' + characterID[7], {})
            .expectStatus(200)
            .afterJSON(function(body){
                var parseBody = body;
                    expect(parseBody._id).toBe(characterID[7]); 
                    expect(parseBody.name).toBe(characterName[7]);
                    expect(parseBody.alias).toBe(characterAlias[7]); 
                    expect(parseBody.species).toBe(characterSpecies[7]); 
                    expect(parseBody.abilities).toBe(characterAbilities[7]); 
                    expect(parseBody.description).toBe(characterDescription[7]); 
                    expect(parseBody.weaknesses).toBe(characterWeakness[7]);
//================================================================//
// Verify Green Arrow object is where he is supposed to be
//================================================================// 
            frisby.create("Retrieve data on Jay Garrick")
                .get('http://localhost:3000/characters/' + characterID[3], {})
                .expectStatus(200)
                .afterJSON(function(body){
                    var parseBody = body;
                        expect(parseBody._id).toBe(characterID[3]); 
                        expect(parseBody.name).toBe(characterName[3]);
                        expect(parseBody.alias).toBe(characterAlias[3]); 
                        expect(parseBody.species).toBe(characterSpecies[3]); 
                        expect(parseBody.abilities).toBe(characterAbilities[3]); 
                        expect(parseBody.description).toBe(characterDescription[3]); 
                        expect(parseBody.weaknesses).toBe(characterWeakness[3]);
//================================================================//
// Verify updated The Flash object is where he is supposed to be
// and not the original Flash
//================================================================// 
                frisby.create("Retrieve data on Princess Diana")
                    .get('http://localhost:3000/characters/' + characterID[1], {})
                    .expectStatus(200)
                    .afterJSON(function(body){
                           var parseBody = body;
                            expect(parseBody._id).toBe(characterID[1]); 
                            expect(parseBody.name).toBe(characterName[1]);
                            expect(parseBody.alias).toBe(characterAlias[1]); 
                            expect(parseBody.species).toBe(characterSpecies[1]); 
                            expect(parseBody.abilities).toBe(characterAbilities[1]); 
                            expect(parseBody.description).toBe(characterDescription[1]); 
                            expect(parseBody.weaknesses).toBe(characterWeakness[1]);
//================================================================//
// Verify Wonder Woman object is where she is supposed to be
// Taking over Batman's old spot
//================================================================// 
                    frisby.create("Retrieve data on Dick Grayson")
                        .get('http://localhost:3000/characters/' + characterID[6], {})
                        .expectStatus(200)
                        .afterJSON(function(body){
                            var parseBody = body;
                                expect(parseBody._id).toBe(characterID[6]); 
                                expect(parseBody.name).toBe(characterName[6]);
                                expect(parseBody.alias).toBe(characterAlias[6]); 
                                expect(parseBody.species).toBe(characterSpecies[6]); 
                                expect(parseBody.abilities).toBe(characterAbilities[6]); 
                                expect(parseBody.description).toBe(characterDescription[6]); 
                                expect(parseBody.weaknesses).toBe(characterWeakness[6]);
//================================================================//
// Verify updated Nightwing object is where he is supposed to be
// and not Robin
//================================================================// 
                                        })
                                    .toss(); // Retrieve data on Dick Grayson
                                    })
                                .toss(); // Retrieve data on Princess Diana
                                })
                            .toss(); // Retrieve data on Jay Garrick
                            })
                        .toss(); // Retrieve data on Oliver Queen
                    })
                .toss();  // Get a list of the updated League roster  
    })
.toss(); // Get a list of the League and store them in placeholders
//================================================================//
// Ending of frisby.creates and generates resulting spec test
//================================================================// 