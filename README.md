# Frisby test on a REST API that uses Node.js, MongoDB, and Express

Before we begin, you will need to have the following installed: Node.js and MongoDB. (To create a REST API with Node.js, Express, and MongoDB, see: https://gist.github.com/iksose/9401758)
<br /><br />
*Express is a lightweight node.js web application framework. It provides the basic HTTP infrastructure that makes it easy to create REST APIs.
<br />
####Installing Node.js

Go to http://nodejs.org, and click the Install button.
Run the installer that you just downloaded. <br />
When the installer completes, a message indicates that Node was installed at /usr/local/bin/node and npm was installed at /usr/local/bin/npm.<br />
At this point node.js is ready to use. 

<br /><br />
####Installing MongoDB

To install on a specific platform, Refer to https://docs.mongodb.com/v3.0/tutorial

<br />
####Setting up our leagueDatabase

- Pull or download the files.

- Open a shell, cd to the test_leagueDatabase directory, and execute the following command to install the express module: npm install

- A node_modules folder is created in the test_leagueDatabase folder, and the Express, MongoDB, Jasmine, and Frisby modules are installed in a subfolder of node_modules.

- Start mongod

- Start mongo

- Start server: node server.js

- Verify the following statement appears: <br />
Connected to 'Agamemnon' database <br />
The 'tob' collection doesn't exist. Creating it with starting entries...<br />
Justice League entries have been added<br />

<br /><br /><br />
 
#####Testing the API using Frisby test files

Before testing, be sure the Agamemnon database is newly created and contains the original entries. If you need to delete the database, refer to Delete Database at the bottom.<br />
 

<br /><br />
You can test you API by executing Frisby scripts. To execute, do the following:

- Start server

- Verify the following statement appears: <br />
Connected to 'Agamemnon' database <br />
The 'tob' collection doesn't exist. Creating it with starting entries...<br />
Justice League entries have been added<br />

- Open bowser window.

- Go to http://localhost:3000/characters

- Observed characters as follows: <br />
    Superman <br />
    Batman <br />
    Wonder Woman<br />
    Green Lantern<br />
    The Flash<br />
    Martian Manhunter<br />
    Aquaman<br />
    Robin<br />
    Green Arrow<br />

- In another console window, change directory to the test_leagueDatabase folder

- Enter the following commands: <br />
  jasmine-node spec/1_testDELETE_spec.js<br />
  &nbsp;&nbsp;Verify the following is displayed:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Finished in # seconds 
    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 tests, 128 assertions, 0 failures, 0 skipped<br />
  &nbsp;&nbsp;Open http://localhost:3000/characters<br />
  &nbsp;&nbsp;Verify Batman entry is no longer displayed<br />
  
  
  jasmine-node spec/2_testGET_spec.js<br />
  &nbsp;&nbsp;Verify the following is displayed:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Finished in # seconds
    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4 tests, 130 assertions, 0 failures, 0 skipped
    
    
  jasmine-node spec/3_testPUT_spec.js<br />
  &nbsp;&nbsp;Verify the following is displayed:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Finished in # seconds
   <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4 tests, 140 assertions, 0 failures, 0 skipped  
  &nbsp;&nbsp;Open http://localhost:3000/characters<br />
  &nbsp;&nbsp;Verify Dick Grayson entry is no longer Robin, and now Nightwing<br />
  &nbsp;&nbsp;Verify The Flash is no longer Barry Allen, and now Jay Garrick<br />
  
  
  jasmine-node spec/4_testGET_spec.js<br />
  &nbsp;&nbsp;Verify the following is displayed:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Finished in # seconds
    <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4 tests, 146 assertions, 0 failures, 0 skipped

<br /><br />
    
#####Testing the API using cURL

You can test your API before using it in a client application. 
You can invoke your REST services straight from a browser address bar.

http://localhost:3000/characters
You will only be able to test your GET services this way.

Using cURL, you can test your API with the following commands:
<br />
 - Add new entry:
<br />curl -i -X POST -H 'Content-Type: application/json' -d '{"name": "Vic Sage", "alias": "Question", "species": "Human", "abilities": "Great Martial Artist, Detective", "description": "Conspiracy theorist and a little bit paranoid.", "weaknesses": "He is only human."}' http://localhost:3000/characters

 - Modify entry with an _id value (use a value that exists in your database):
<br />curl -i -X PUT -H 'Content-Type: application/json' -d '{name: "John Stewart", alias: "Green Lantern", species: "Human", abilities: "Wields Oan power ring", description: "Is an architect and veteran U.S. Marine from Detroit, Michigan, who was selected by the Guardians as a backup Green Lantern to then-current Green Lantern Hal Jordan"}' http://localhost:3000/characters/(_id value)

 - Get all entries:
<br />curl -i -X GET http://localhost:3000/characters

 - Get entry with an _id value (use a value that exists in your database):
<br />curl -i -X GET http://localhost:3000/characters/(_id value)

 - Delete entry with an _id value (use a value that exists in your database)
<br />curl -i -X DELETE http://localhost:3000/characters/(_id value)

<br /><br /><br />

#####Delete Database

 &nbsp;&nbsp;To delete a database in mongo, do the following:
 <br />&nbsp;&nbsp;&nbsp;&nbsp;In mongo, type: use Agamemnon
 <br />&nbsp;&nbsp;&nbsp;&nbsp;Verify the following is displayed: switched to db Agamemnon
 <br />&nbsp;&nbsp;&nbsp;&nbsp;In mongo, type: db.dropDatabase()
 <br />&nbsp;&nbsp;&nbsp;&nbsp;Verify the following is displayed: { "dropped" : "Agamemnon", "ok" : 1 }
  