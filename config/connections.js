require('dotenv').config();
const {connect, connection} = require("mongoose");


const connectionString = process.env.MONGODB_URI ||"mongodb://localhost:27017/socialnetworkdb"

connect(connectionString, {
    useNewUrlparser: true,
    useUnifiedTopology: true,

});

module.exports = connection;
