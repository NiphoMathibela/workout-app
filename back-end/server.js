const express = require('express');
const mongoose = require('mongoose');
const {MongoClient} = require('mongodb');
const port = 3000;

const app = express();

app.use(express.json());

async function main(){
    const uri = 'mongodb+srv://nipho:Nipho28@cluster0.bwafay7.mongodb.net/?retryWrites=true&w=majority';
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});