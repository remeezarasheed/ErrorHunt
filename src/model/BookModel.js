const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://remeeza123:Remeeza@123@cluster0.zh7ip.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false });
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;