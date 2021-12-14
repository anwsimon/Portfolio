const app = require('./app')
const { db }= require("./db");

//for later deployment
const PORT = process.env.PORT || 3000;


//sync db then listen for requests
db.sync({force: true})
  .then(function(){
    app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
  })

