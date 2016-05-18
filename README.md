# test_leagueDatabase
###Creating a REST API using Node.js, Express, and MongoDB

####Installing Node.js

Go to http://nodejs.org, and click the Install button.
Run the installer that you just downloaded. When the installer completes, a message indicates that Node was installed at /usr/local/bin/node and npm was installed at /usr/local/bin/npm.
At this point node.js is ready to use. 


####Installing MongoDB

To install MongoDB on your specific platform, refer to the MongoDB QuickStart. 

Once installed, do the following:

Create a folder for MongoDB’s data and set the appropriate permissions:
sudo mkdir -p /data/db
sudo chown `id -u` /data/db

Start mongodb
cd /usr/local/mongodb
./bin/mongod

You can also open the MongoDB Interactive Shell in another terminal window to interact with your database using a command line interface.
cd /usr/local/mongodb
./bin/mongo

Refer to the MongoDB Interactive Shell documentation for more information.


####Installing Express

Express is a lightweight node.js web application framework. It provides the basic HTTP infrastructure that makes it easy to create REST APIs.

To install Express in the test application:

Open a shell, cd to the test_leagueDatabase directory, and execute the following command to install the express module.
npm install

A node_modules folder is created in the test_leagueDatabase folder, and the Express, MongoDB, Jasmine, and Frisby modules are installed in a subfolder of node_modules.

Now that Express is installed, we can stub a basic REST API for the nodecellar application:



Implementing the REST API

The full REST API for the nodecellar application consists of the following methods:


Restart the server to test the API.



Testing the API using cURL

If you want to test your API before using it in a client application, you can invoke your REST services straight from a browser address bar. For example, you could try:

http://localhost:3000/characters
You will only be able to test your GET services that way. A more versatile solution to test RESTful services is to use cURL, a command line utility for transferring data with URL syntax.

For example, using cURL, you can test the API with the following commands:

Add a new entry:
curl -i -X POST -H 'Content-Type: application/json' -d '{"name": "Vic Sage", "alias": "Question", "species": "Human", "abilities": "Great Martial Artist, Detective", "description": "Conspiracy theorist and a little bit paranoid.", "weaknesses": "He is only human."}' http://localhost:3000/characters

Modify entry with an _id value (use a value that exists in your database)
curl -i -X PUT -H 'Content-Type: application/json' -d '{name: "John Stewart", alias: "Green Lantern", species: "Human", abilities: "Wields Oan power ring", description: "Is an architect and veteran U.S. Marine from Detroit, Michigan, who was selected by the Guardians as a backup Green Lantern to then-current Green Lantern Hal Jordan"}' http://localhost:3000/characters/(_id value)

Get all Justice League entries:
curl -i -X GET http://localhost:3000/characters

Get entry with an _id value (use a value that exists in your database)
curl -i -X GET http://localhost:3000/characters/(_id value)

Delete entry with an _id value (use a value that exists in your database)
curl -i -X DELETE http://localhost:3000/characters/(_id value)