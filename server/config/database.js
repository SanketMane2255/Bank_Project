const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect(`mongodb://localhost:27017/Bank`)
    .then(()=> {console.log(`Connected to DB`)})
    .catch((err) => {console.log(err)})
}

module.exports = connectDB