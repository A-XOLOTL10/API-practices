const fs = require('fs')

const writer = async () => {
    try{
        await fs.writeFileSync('./sample.txt','This is my writeContent')
        console.log("successful")
    }catch(e){
        console.log(e)
    }
}
writer()