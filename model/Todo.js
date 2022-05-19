const fs = require('fs');
const path = require('path');

const rootdir = require('../path');
const filepath = path.join(rootdir , "data " , "todo.json")

class Todo{
        constructor(id , text , completed = false){
            this.id = id
            this.text = text
            this.completed = completed
    }

    save(callback){
        fs.writeFile(filepath , JSON.stringify(this) , (err) =>{
            if(err) callback (err)
        })
    }
}


