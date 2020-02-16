const mongoose = require('mongoose');

function connect() {
    return new Promise((resolve) => {
        if (process.env.SECONDHANDSHOP === 'test') {
            const Mockgoose = require('mockgoose').Mockgoose
            const mockgoose = new Mockgoose(mongoose);

            mockgoose.prepareStorage()
            .then(() => {

                mongoose.connect(process.env.URL, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useFindAndModify: false,
                    useCreateIndex: true
                  })
                  .then(() => {
                    console.log("Successfully connected to MongodB server");
                    (err) => console.log(err);
                    resolve();
                })
                
            })
        }
        else {mongoose.connect(process.env.URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
          })
          .then(() => {
            console.log("Successfully connected to MongodB server");
            (err) => console.log(err);
            resolve();
        })
        }
    })
}


  function close() {
    mongoose.models = {};
    mongoose.modelSchemas = {};
    return mongoose.disconnect();
}

module.exports = {
    connect,
    close
}