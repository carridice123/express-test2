const name = require('../models/getRappersName')

module.exports = {
    rapper: (req,res)=>{
        const rappersName = req.params.rapperName.toLowerCase()
        if(name.rappers[rappersName]){
            res.json(name.rappers[rappersName])
        }else{
            res.json(name.rappers['dylan'])
        }
    }
}








