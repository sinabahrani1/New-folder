const {Router} = require('express');

const router =  Router()

router.get('/' , (req , res)=>{
    res.render("index" ,{
        title:"کارهای روزمره "
    })
})

module.exports = router