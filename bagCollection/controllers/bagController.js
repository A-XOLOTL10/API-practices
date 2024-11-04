const bagModel = require('../models/bagModel');

exports.newCollection = async (req, res)=>{
    try{
        const bag = await bagModel.create(req.body);
        res.status(201).json(
            {
                message: 'Bag created successfully',
                data: bag
        });
    }catch(err){
        res.status(500).json({message: 'Error creating bag'});
    }
}

exports.getAll = async (req, res)=>{
 try {
    const bag = await bagModel.find();
    res.status(201).json(
        {
            message: 'current Bags ',
            data: bag
    });
 } catch (error) {
    res.status(500).json({message: 'Error creating bag'});
 }
    }

    //get a bag 
    exports.getOne = async (req, res)=>{
        try{
            const bag = await bagModel.findById(req.params.id);
            res.status(201).json(
                {
                    message: 'Bag found',
                    data: bag
                });
        }catch(err){
            res.status(500).json({message: 'Error finding bag'});
        }
    }
   
    //update a bag
    exports.updateOne = async (req, res)=>{
        try{
            const bag = await bagModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
            res.status(201).json(
                {
                    message: 'Bag updated successfully',
                    data: bag
                });
        }catch(err){
            res.status(500).json({message: 'Error updating bag'});
        }
    }

    //delete a bag
    exports.deleteOne = async (req, res)=>{
        try{
            const bag = await bagModel.findByIdAndDelete(req.params.id);
            res.status(201).json(
                {
                    message: 'Bag deleted successfully',
                    data: bag
                });
        }catch(err){
            res.status(500).json({message: 'Error deleting bag'});
        }
    }
  //update a bag
