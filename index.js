const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
const app = express();
app.listen(3000, () => console.log("Server is running"));

// 2. Define a schema
const studentSchema = new mongoose.Schema({
    roll_no: {
        type: Number,
        required: true
    },
    name: String,
    year: Number,
    subjects: [String]
});

// 3. Define the model
const Student = mongoose.model('Student', studentSchema);

const stud = new Student({
    roll_no: 1001,
    name: 'Madison Hyde',
    year: 3,
    subjects: ['DBMS', 'OS', 'Graph Theory', 'Internet Programming']
});
stud
    .save()
    .then(
        () => console.log("One entry added"),
        (err) => console.log(err)
    );

app.get('/', (req, res) => {
    Student.find({}, (err, found) => {
        if (!err) {
            res.send(found);
        }
        console.log(err);
        res.send("Some error occured!")
    }).catch(err => console.log("Error occured, " + err));
});