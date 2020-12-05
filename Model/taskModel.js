const ObjectId = require('mongodb').ObjectId;

async function getCompletedTasks(db) {
    return await db.collection('tasks').find( { "deleted" : { $exists: false }, "completed" : { $exists: true } } ).toArray();
}

async function getAllTasks(db) {
    return await db.collection('tasks').find({"completed": { $exists: false }, "deleted" : { $exists: false }}).toArray();
}

async function insertNewTask(db, newTask) {
    return await db.collection('tasks').insertOne({"name": newTask});
}

async function markTaskAsComplete(db, taskId) {
    return await db.collection('tasks').updateOne({"_id": ObjectId(taskId)}, {$set: {"completed": "1"}});
}

async function markTaskAsDeleted(db, taskId) {
    return await db.collection('tasks').updateOne({"_id": ObjectId(taskId)}, {$set: {"deleted": "1"}});
}

module.exports.getCompletedTasks = getCompletedTasks;
module.exports.getAllTasks = getAllTasks;
module.exports.insertNewTask = insertNewTask;
module.exports.markTaskAsComplete = markTaskAsComplete;
module.exports.markTaskAsDeleted = markTaskAsDeleted;