const express = require('express');
// const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

let lists = [];
let list_number = 0;

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(express.static('public'));

app.post('/lists', function(req, res){
    let result = req.body;
    lists.push(result);
    console.log(lists);
})

app.post('/counters', function(req, res){
    if (req.body.listCounter){
    let list_number_string = req.body.listCounter;
    list_number = parseInt(list_number_string);
    console.log(list_number);
    }
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));