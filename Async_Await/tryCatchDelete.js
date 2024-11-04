const fs = require('fs')

const deleter = async () => {
    try{
        await fs.unlink('./sample.txt',()=>{
            console.log("successful delete")
        })
    }catch(e){
        console.log(e)
    }
}
deleter()