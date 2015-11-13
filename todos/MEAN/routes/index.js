var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/helloworld', function(req, res, next) {
  res.render('helloworld', { title: 'Hello World' });
});

/* GET todolist page. */
router.get('/todos', function(req, res) {
    var db = req.db;
    var collection = db.get('todos');
    collection.find({},{},function(e,docs){
        /*res.render('helloworld', {
            title: 'Todo List',
            "todolist" : docs
        });*/
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(docs, null, 3));
    });
});

module.exports = router;
