const dotenv = require('dotenv')
dotenv.config()

const mongodb = require('mongodb')

// Environment Variables
const connectionString = process.env.CONNECTIONSTRING
const port = process.env.PORT

mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
    if (err) {
        console.error('An error occured connecting to MongoDB: ', err)
    } else {
        module.exports = client.db()
        const app = require('./app')
        app.listen(port)
    }
})