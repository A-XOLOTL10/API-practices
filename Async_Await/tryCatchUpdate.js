const { error } = require('console')
const fs = require('fs')

const updater = async () => {
    try{
        await fs.appendFileSync('./sample.txt','\nThis is my writefile succesfully updated')
            console.log("successful Update")

    }catch(e){
       throw e
    }
}
updater()