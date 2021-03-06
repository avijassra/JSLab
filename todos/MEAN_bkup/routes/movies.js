/* global ObjectId */
var express = require('express');
var router = express.Router();

/* GET todolist */
router.get('/', function(req, res) {
    var db = req.db;
    var collection = db.get('todos');
    collection.find({},{},function(e,docs){
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(docs, null, 3));
    });
});

/* POST todo item */
router.post('/', function(req, res) {
    var db = req.db, // Set our internal DB variable
        newTask = req.body.newTask, // Get our form values. These rely on the "name" attributes
        collection = db.get('todos');
    
    // Submit to the DB
    collection.insert({
        "task" : newTask,
        "isComplete": false
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        } else {
            // And forward to success page
            res.send(JSON.stringify(doc, null, 3));
        }
    });
});

/* PUT todo item */
router.put('/:id', function(req, res) {
    var db = req.db, // Set our internal DB variable
        updatedTaskId = req.params.id,
        updatedTask = req.body.updatedTask, // Get our form values. These rely on the "name" attributes
        markAsComplete = req.body.isComplete,
        collection = db.get('todos'),
        updateJson;
        
    if(typeof updatedTask !== 'undefined') {
        updateJson = {
            "task" : updatedTask
        };
    } else {
        updateJson = {
            "isComplete" : markAsComplete
        }
    }
    // Submit to the DB
    collection.update({ _id: updatedTaskId },
        {$set: updateJson}, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        } else {
            // And forward to success page
            res.send(JSON.stringify(doc, null, 3));
        }
    });
});

/* DELETE todo item */
router.delete('/:id', function(req, res) {
    var db = req.db, // Set our internal DB variable
        collection = db.get('todos');
    
    // Submit to the DB
    collection.remove({
        "_id" : req.params.id
    }, function (err) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        } else {
            // And forward to success page
            res.send(JSON.stringify({ hasError: false}, null, 3));
        }
    });
});

module.exports = router;