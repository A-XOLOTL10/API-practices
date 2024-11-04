const express = require('express');
const { newCollection,getAll,getOne,updateOne,deleteOne} = require('../controllers/bagController');


const Router = express.Router();
Router.route("/new").post(newCollection);
Router.route("/view").get(getAll);
Router.route("/view/:id").get(getOne);
Router.route("/view/:id").post(updateOne);
Router.route("/view/:id").delete(deleteOne);
module.exports = Router;