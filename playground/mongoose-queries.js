const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')

var id = '5c6125916cb9a63bfc5f7cf0'

if (!ObjectID.isValid(id)) {
    return console.log('Id not valid')
}

Todo.find().then((todos) => {
    console.log('Todos', JSON.stringify(todos, undefined, 2))
})

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo)
})

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('No todo with id', id)
    }

    console.log('Todo', todo)
}).catch((err) => console.log(err))