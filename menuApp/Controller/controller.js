const {showAll,showBreakfast,showLunch,showDinner} = require('../Model/model')
const displayAll= async (req,res) =>{
    try{
      const shower =   await showAll()
            res.end(shower)
    }catch(e){
        console.log(e.message)
    }
}
const displayBreakfast = async (req,res) =>{
    try{
        const breaker = await showBreakfast()
            res.end(breaker)
    }
    catch(e){
        console.log(e.message)
    }
}
const breakfastSingle = async ()
const displayLunch = async (req,res,id) =>{
    try{
        const luncher = await showLunch()
        if(!luncher){
            res.end("404 not found")
        }else{
            res.end(luncher)
        }
    }
    catch(e){
        console.log(e.message)
    }
}

const displayDinner = async (req,res,id) =>{
    try{
        const Dinnerer = await showDinner()
        if(!Dinnerer){
            res.end("404 not found")
        }else{
            res.end(Dinnerer)
        }
    }
    catch(e){
        console.log(e.message)
    }
}
module.exports = {displayAll,displayBreakfast,displayLunch,displayDinner}