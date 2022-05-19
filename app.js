const express = require('express');
const body_parser = require('body-parser');

const app =  express();


//costom midelwer
app.use(body_parser.urlencoded({extended:false}))



const port = 4000
app.listen( port,
    console.log(`Server runing on port ${port}`)
)