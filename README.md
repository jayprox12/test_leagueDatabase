# test_leagueDatabase

Before we begin, you will need to have the following installed: Node.js and MongoDB. (To create a REST API with Node.js, Express, and MongoDB, see: https://gist.github.com/iksose/9401758)

####Installing Node.js

Go to http://nodejs.org, and click the Install button.
Run the installer that you just downloaded. When the installer completes, a message indicates that Node was installed at /usr/local/bin/node and npm was installed at /usr/local/bin/npm.
At this point node.js is ready to use. 


####Installing MongoDB

To install MongoDB on your specific platform, refer to the MongoDB QuickStart. 

Once installed, do the following:

Create a /data/db folder for MongoDB’s data and set the appropriate permissions.

Refer to the MongoDB Interactive Shell documentation for more information.


####Setting up our leagueDatabase

- Pull the files.

- Open a shell, cd to the test_leagueDatabase directory, and execute the following command to install the express module: npm install

*Express is a lightweight node.js web application framework. It provides the basic HTTP infrastructure that makes it easy to create REST APIs.

- A node_modules folder is created in the test_leagueDatabase folder, and the Express, MongoDB, Jasmine, and Frisby modules are installed in a subfolder of node_modules.

- Start Mongo

- Start server: node server.js

Should see the server connecting and a statement: Connected to 'Agamemnon' database

 
#####Testing the API using cURL

You can test your API before using it in a client application. 
You can invoke your REST services straight from a browser address bar.

http://localhost:3000/characters
You will only be able to test your GET services this way.

Using cURL, you can test your API with the following commands:

Add new entry:
curl -i -X POST -H 'Content-Type: application/json' -d '{"name": "Vic Sage", "alias": "Question", "species": "Human", "abilities": "Great Martial Artist, Detective", "description": "Conspiracy theorist and a little bit paranoid.", "weaknesses": "He is only human."}' http://localhost:3000/characters

Modify entry with an _id value (use a value that exists in your database):
curl -i -X PUT -H 'Content-Type: application/json' -d '{name: "John Stewart", alias: "Green Lantern", species: "Human", abilities: "Wields Oan power ring", description: "Is an architect and veteran U.S. Marine from Detroit, Michigan, who was selected by the Guardians as a backup Green Lantern to then-current Green Lantern Hal Jordan"}' http://localhost:3000/characters/(_id value)

Get all entries:
curl -i -X GET http://localhost:3000/characters

Get entry with an _id value (use a value that exists in your database):
curl -i -X GET http://localhost:3000/characters/(_id value)

Delete entry with an _id value (use a value that exists in your database)
curl -i -X DELETE http://localhost:3000/characters/(_id value)



#####Testing the API using Frisby test files

You can test you API by executing Frisby scripts. Assuming the Agamemnon database does not exist, do the following:

- Start server

- Verify the following statement appears: 
Connected to 'Agamemnon' database
The 'tob' collection doesn't exist. Creating it with starting entries...
Justice League entries have been added

- Open bowser window.

- Go to http://localhost:3000/characters

- Observed characters as follows:
    -- Superman
    -- Batman
    -- Wonder Woman
    -- Green Lantern
    -- The Flash
    -- Martian Manhunter
    -- Aquaman
    -- Robin
    -- Green Arrow

- In another console window, change directory to the test_leagueDatabase folder

- Enter the following commands: 
  jasmine-node spec/1_testDELETE_spec.js
  Verify the following is displayed:
    Finished in # seconds
    3 tests, 128 assertions, 0 failures, 0 skipped
  Open http://localhost:3000/characters
  Verify Batman entry is no longer displayed
  
  
  jasmine-node spec/2_testGET_spec.js
  Verify the following is displayed:
    Finished in # seconds
    4 tests, 130 assertions, 0 failures, 0 skipped
    
    
  jasmine-node spec/3_testPUT_spec.js
  Verify the following is displayed:
    Finished in # seconds
    4 tests, 140 assertions, 0 failures, 0 skipped  
  Open http://localhost:3000/characters
  Verify Dick Grayson entry is no longer Robin, and now Nightwing
  Verify The Flash is no longer Barry Allen, and now Jay Garrick
  
  
  jasmine-node spec/4_testGET_spec.js
  Verify the following is displayed:
    Finished in # seconds
    4 tests, 146 assertions, 0 failures, 0 skipped
  