const { ObjectID } = require('mongodb')

const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')

// Todo.deleteMany({}).then((res) => {
//     console.log(res)
// })

// Todo.findOneAndDelete().then((res) => {
//     console.log(res)
// })

Todo.findByIdAndDelete(new ObjectID('5c623bd59371401b7a4d2a0c')).then((res) => {
    console.log(res)
})