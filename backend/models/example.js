const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const exampleSchema = mongoose.Schema({
  username: {
    type: String,
    minlength: 3,
    unique:true
  },
  name: String,
  passwordHash: String,
  blogs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Blog'
    }
  ],
})

exampleSchema.plugin(uniqueValidator)

exampleSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash
  }
})

const Example = mongoose.model('Example', exampleSchema)

module.exports = Example