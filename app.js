const express = require('express');
const body_parser = require('body-parser');
const path = require('path');

const app =  express();

//costom midelwer
app.use(body_parser.urlencoded({extended:false}))

app.set("view engine" , "ejs")
app.set("views" , "views")

app.use(express.static(path.join(__dirname , "public")))

app.get("/" ,(req , res )=>{
    res.render("index" ,{
        title:"کارهای روزمره"
    })
})

const port = 4000
app.listen( port,
    console.log(`Server runing on port ${port}`)
)