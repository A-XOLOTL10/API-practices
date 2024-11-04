
const hospitalModel = require('../Model/hospitalModel');

exports.newPatient = async(req, res) => {
  try {
    const patient = await hospitalModel.create(req.body)
    res.status(200).json({message:"successful creation", patient: patient});
  } catch (error) {
    res.status(404).json({ error: error.message})
  }

} 
exports.getOnePatient = async(req, res) => {
  try {
    const patient = await hospitalModel.findById(req.params.id)
    res.status(200).json({message:"successful retrieval", patient: patient});
  } catch (error) {
    res.status(404).json({ error: error.message})
  }
}
exports.getPatients = async(req, res) => {
  try {
    const patient = await hospitalModel.find()
    res.status(200).json({message:"successful retrieval", patient: patient});
  } catch (error) {
    res.status(404).json({ error: error.message})
  }
}
exports.updatePatient = async(req, res) => {
  try {
    const patient = await hospitalModel.findByIdAndUpdate(req.params.id, req.body,{new:true})
    res.status(200).json({message:"successful update", patient: patient});
  } catch (error) {
    res.status(404).json({ error: error.message})
  }
}
exports.deletePatient = async(req, res) => {
  try {
    const patient = await hospitalModel.findByIdAndDelete(req.params.id)
    res.status(200).json({message:"successful deletion", patient: patient});
  } catch (error) {
    res.status(404).json({ error: error.message})
  }
}
