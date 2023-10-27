let express = require('express');
let bodyParse = require('body-parser');
let cors = require('cors');

let app = express();
let router = express.Router();
app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json());
app.use(cors());
app.use('/api',router);

const array = [
    {id: 1, name: 'Somename0', age: 21},
    {id: 2, name: 'Somename1', age: 21},
    {id: 3, name: 'Somename2', age: 21},
    {id: 4, name: 'Somename3', age: 21},
    {id: 5, name: 'Somename4', age: 21},
    {id: 6, name: 'Somename5', age: 21},
]

router.route('/getList').get((req,res)=>{
    res.json(array);
})

router.route('/postList').post((req,res)=>{
    let el = req.body;
    el.id = array.length+1;
    array.push(el);
    res.json(el);
})

let port = 8000
app.listen(port)