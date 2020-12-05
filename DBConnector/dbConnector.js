const MongoClient = require('mongodb').MongoClient;

async function connectToDatabase() {
    const connection = await MongoClient.connect('mongodb://root:password@localhost:27017', {useNewUrlParser: true, useUnifiedTopology: true});
    return connection.db('Tasks');
}

module.exports = connectToDatabase;