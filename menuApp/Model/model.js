
const menu = require('../menuDatabase.json')
const menuBreak = menu[0]
const menuLunch = menu[1]
const menuDinner= menu[2]
const showAll =()=>{
    return new Promise ((resolve,reject)=>{
        resolve( JSON.stringify(menu))
       
    })
}
const showBreakfast = () =>{
    return new Promise ((resolve,reject)=>{
        resolve(JSON.stringify(menuBreak))
    })
}
const breakSingle = (id) =>{
    return new Promise ((resolve,reject)=>{
    const Breakfast =  menuBreak.find((item)=>item.ÏD === id)
      resolve(JSON.stringify(Breakfast))
    })
}
const showLunch = () =>{
    return new Promise ((resolve,reject)=>{
        resolve(JSON.stringify(menuLunch))
    })
}
const lunSingle = (id) =>{
    return new Promise ((resolve,reject)=>{
    const Lunch =  menuLunch.find((item)=>item.ÏD === id)
    resolve(JSON.stringify(Lunch))
    })
}
const showDinner= () =>{
    return new Promise ((resolve,reject)=>{
        resolve(JSON.stringify(menuDinner))
    })
}
const dinSingle = (id) =>{
    return new Promise ((resolve,reject)=>{
        const Dinner =  menuDinner.find((item)=>item.ÏD === id)
        resolve(JSON.stringify(Dinner))
    })
}
module.exports = {showAll,showBreakfast,showLunch,showDinner,breakSingle,lunSingle,dinSingle} 
