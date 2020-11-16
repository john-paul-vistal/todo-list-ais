const express = require('express');
var bodyParser = require('body-parser');
const Handlebars = require('hbs')
const app = express()
const port = 8003

const database = require("./database/database");

const Todolist = require("./routes/todoRoutes");

app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('view engine', 'hbs')

Handlebars.registerHelper('getDate', function(val, options) {
    let date = new Date(val)
    var dateRecorded = date.getMonth() + 1 + '-' + date.getDate() + '-' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    return dateRecorded
});






app.use("/todolist", Todolist);

database.connect();


app.listen(port, () => {
    console.log(`Server listening to port ${port}!`);
    console.log(`link::localhost:${port}/todolist/`);
});