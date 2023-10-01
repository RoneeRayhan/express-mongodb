const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
PORT = process.env.PORT;

mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
const app = express();
app.listen(PORT, () => console.log(`Server is running @ ${PORT}`));

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

app.get('/s', (req, res) => {
    /* Student.find({}, (err, found) => {
        if (!err) {
            res.send(found);
        }
        console.log(err);
        res.send("Some error occured!")
    }).catch(err => console.log("Error occured, " + err)); */
    Student.find().then((data) => {
        console.log(data);
        res.send(data);
    });
});