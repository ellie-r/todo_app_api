const dbConnector = require('../DBConnector/dbConnector.js')
const taskModel = require('../Model/taskModel.js');


async function getTasks(req, res) {
    const db = await dbConnector();
    let results;
    if (req.query.completed) {
        results = await taskModel.getCompletedTasks(db);
    } else {
        results = await taskModel.getAllTasks(db);
    }
    return res.json({"success": true, "message": "got tasks from db", "data": results});
}

async function addTask(req, res) {
    let newTask = req.body.taskName;
    const db = await dbConnector();
    try {
        if(!newTask) {
            throw "empty"
        }
        const result = await taskModel.insertNewTask(db, newTask);
        if (result.insertedCount) {
            res.json({"success": true, "message": "new task added to db", "data": []});
        } else {
            res.json({"success": false, "message": "error, couldn't add task to db", "data": []});
        }
    } catch (e) {
        res.json({"success": false, "message": "error, couldn't find new task name", "data": []});
    }
}

async function markAsComplete(req, res) {
    let taskId =  req.params.id;
    const db = await dbConnector();
    try {
        const result = await taskModel.markTaskAsComplete(db, taskId);
        console.log(result)
        if (result.modifiedCount) {
            res.json({"success": true, "message": "task marked as complete", "data": []});
        } else {
            res.json({"success": false, "message": "error, couldn't mark task as complete", "data": []});
        }
    } catch (e) {
        res.json({"success": false, "message": "error, incorrect task id given", "data": []});
    }
}

async function deleteTask(req, res) {
        let taskId =  req.params.id;
        const db = await dbConnector();
        try {
            const result = await taskModel.markTaskAsDeleted(db, taskId);
            if (result.modifiedCount) {
                res.json({"success": true, "message": "task marked as deleted", "data": []});
            } else {
                res.json({"success": false, "message": "error, couldn't mark task as deleted", "data": []});
            }
        } catch (e) {
            res.json({"success": false, "message": "error, incorrect task id given", "data": []});
        }
}

module.exports.getTasks = getTasks;
module.exports.addTask = addTask;
module.exports.markAsComplete = markAsComplete;
module.exports.deleteTask = deleteTask;