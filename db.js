const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://brahim:09711205@cluster0.o555owq.mongodb.net/postsDB?retryWrites=true&w=majority', (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;