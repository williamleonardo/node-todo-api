const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }

    console.log('Connected to MongoDB server')

    var db = client.db('TodoApp')

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5c5d27b72bd67f4ca0212886')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res)
    })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c5d27b72bd67f4ca0212887')
    }, {
        $set: {
            name: 'William Leonardo'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res)
    })

    client.close()
})