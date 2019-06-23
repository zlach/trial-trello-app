const express = require('express');
// const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

let lists = [];
let list_number = 0;
let cards = [];

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(express.static('public'));

app.post('/lists', function(req, res){
    lists.push(req.body);
    res.send('message received');
});

app.post('/cards-clear', function(req, res){
    let sweet = req.body;
    cards = [];
    res.send('message received');
    console.log('success?... cards...', cards);
})

app.post('/cards', function(req, res){
    cards.push(req.body);
    res.send('message received');
    console.log(cards);
})

app.post('/lists/move', function(req, res){
    let selected = req.body.selected;
    let index = req.body.index;
    for (let i = 0; i < lists.length;i++){
        if (i == index){
            let move = lists.splice(i, 1)[0];
            lists.splice(selected, 0, move);
        }
    }
    res.send('message received');
});

app.post('/lists/remove', function(req, res){
    let index = req.body.index;
    console.log('delete index', index);
    lists.splice(index, 1);
    res.send('message received');
})

app.get('/lists', function(req, res){
    res.send(lists);
    lists = [];
})

app.get('/cards', function(req, res){
    res.send(cards);
})

// app.post('/counters', function(req, res){
//     if (req.body.listCounter){
//         let list_number_string = req.body.listCounter;
//         list_number = parseInt(list_number_string);
//         res.send('message received');
//         console.log(list_number);
//     }
// })

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));