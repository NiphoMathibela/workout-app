const express = require("express");
const app = express();
const port = 3000
const {MongoClient} = require("mongodb");

async function main (){
//Connect to cluster
//Call functions that connect to db
//Disconnect from cluster

    const uri = "mongodb+srv://nipho:Excellent@28@workout-tracker.1m7elt8.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongoClient(uri);


    try {
        await client.connect();
        await lisDBs(client);
    } catch (error) {
        console.error(error);
    }finally{
        await client.close();
    }

}

main().catch(console.error);

async function lisDBs(client){
    const dbList = await client.db().admin().listDatabases();
    console.log("Databases: ");

    dbList.databases.forEach(db => {
        console.log(db.name);
    });
}

// app.get('/', (req, res) => {
//     res.send("Testing...");
// })

// app.listen(port, () => {
//     console.log("Server is listening on port " + port)
// })