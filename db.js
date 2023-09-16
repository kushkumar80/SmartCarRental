const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://kush:kk$1234@cluster0.pvq6pt3.mongodb.net/mycar?retryWrites=true&w=majority' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose