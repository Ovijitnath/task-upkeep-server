const express = require('express')
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.m7f1lqz.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        // const usersCollection = client.db('taskUpkeep').collection('users');
        const taskCollection = client.db('taskUpkeep').collection('allAddedTasks');
        // const taskCollection = client.db('taskUpkeep').collection('allTasks');

        // app.post('/users', async (req, res) => {
        //     const user = req.body;
        //     const result = await usersCollection.insertOne(user);
        //     res.send(result);
        // });


        // app.get('/alladdedtasks', async (req, res) => {
        //     const query = {};
        //     const mytask = await taskCollection.find(query).toArray();
        //     res.send(mytask);
        // });
        app.post('/alltasks', async (req, res) => {
            const allAddedTasks = req.body;
            const result = await taskCollection.insertOne(allAddedTasks)
            res.send(result);
        });

    }
    finally {

    }
}
run().catch(err => console.error(err));




app.get('/', async (req, res) => {
    res.send('Task-Upkeep server Running');
});

app.listen(port, () => {
    console.log('Task-Upkeep server running on port on', port);
})