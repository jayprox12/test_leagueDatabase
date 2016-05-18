// Frisby test scripts to Delete Batman in MongoDB.
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
    frisby.create("Remove Batman")
        .delete('http://localhost:3000/characters/' + characterID[1], {})
        .expectStatus(200)
        .afterJSON(function(body){
            var parseBody = body;
            characterID.splice(1, 1); 
            characterName.splice(1, 1); 
            characterAlias.splice(1, 1);
            characterSpecies.splice(1, 1);
            characterAbilities.splice(1, 1);
            characterDescription.splice(1, 1);
            characterWeakness.splice(1, 1);
            i--;
            expect(characterName[1]).toBe("Diana Prince");
            expect(characterAlias[1]).toBe("Wonder Woman");
            expect(characterSpecies[1]).toBe("Demigoddess");
            expect(characterAbilities[1]).toBe("Superhuman strength, speed, agility, durability, endurance and reflexes Agelessness Flight Master hand-to-hand combatant Utilizes indestructible bracelets and the Lasso of Truth");
            expect(characterDescription[1]).toBe("A founding member of the Justice League, Wonder Woman was sculpted from clay by her mother Hippolyta, and received life and superhuman powers as blessings from the Olympian deities, combined with her Amazonian-training' helped to develop a wide range of extraordinary skills in both hunting and fighting");
            expect(characterWeakness[1]).toBe("If convinced, she could be trapped in a neverending cycle of combat against a phantom opponent");
//================================================================//
// Locate Batman object and delete him. Remove Batman from its 
// array slot and check to make sure Wonder Woman to his slot.
// Update index count decremation
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
    .toss(); // Remove Batman
    })
.toss(); // Get a list of the League and store them in placeholders
//================================================================//
// Ending of frisby.creates and generates resulting spec test
//================================================================// 