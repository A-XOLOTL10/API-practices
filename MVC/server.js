require('./config/dbConfig.js')
const router = require('./Routes/routes.js')
const express = require('express');
const PORT = 4000;
const app = express();


app.use(express.json());
app.use(express.urlencoded({encoded:true}))
app.use(router);

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
});