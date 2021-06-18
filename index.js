var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://admin:utepsajets2021@jest2021.tdbf8.mongodb.net/jest2021?retryWrites=true&w=majority';

MongoClient.connect(url, function(err, db){
    /* console.log('conectado');

    db.close(); */
    cursor.each(function(err, doc){
        console.log(doc);
    });
});