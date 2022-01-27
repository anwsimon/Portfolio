const app = require('./app')
// const { db }= require("./db");

//for later deployment
const PORT = process.env.PORT || 3000;


//sync db then listen for requests
const server = () => {
    app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
  }

  server()
