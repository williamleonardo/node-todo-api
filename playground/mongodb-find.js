const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }

    console.log('Connected to MongoDB server')

    var db = client.db('TodoApp')

    db.collection('Todos').find({
        _id: new ObjectID('5c5d269f7c05101ae886f3e5')
    }).toArray().then((docs) => {
        console.log('Todos')
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        if (err) {
            console.log('Unable to fetch todos', err)
        }
    })

    db.collection('Todos').find().count().then((count) => {
        console.log('Todos count', count)
    }, (err) => {
        if (err) {
            console.log('Unable to fetch todos', err)
        }
    })

    db.collection('Users').find({ name: 'William' }).toArray().then((docs) => {
        console.log('Users:')
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        if (err) {
            console.log('Unable to fetch users', err)
        }
    })
})