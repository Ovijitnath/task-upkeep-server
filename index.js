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



    }
    finally {

    }
}
run().catch(console.log);




app.get('/', async (req, res) => {
    res.send('Task-Upkeep server Running');
});


// Loading Data
// const catagories = require('./data/catagories.json');

// const courses = require('./data/courses.json');




// // Loading catagories
// app.get('/catagories', (req, res) => {
//     res.send(catagories);
// });


// // Loading catagories by ID
// app.get('/courses/:id', (req, res) => {
//     const id = req.params.id;
//     const selectedCourses = courses.find(c => c._id === id);

//     res.send(selectedCourses);
// });


// app.get('/course/:id', (req, res) => {
//     const id = req.params.id;
//     const CourseDetails = courses.filter(c => c.category_id == id);

//     res.send(CourseDetails);
// });

// // Checkout page as per user login
// app.get('/checkout/:id', (req, res) => {
//     const id = req.params.id;
//     const CourseDetails = courses.filter(c => c.category_id == id);

//     res.send(CourseDetails);
// });

app.listen(port, () => {
    console.log('Task-Upkeep server running on port on', port);
})