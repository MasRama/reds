import BasicController from "../app/controllers/BasicController";



const HyperExpress = require('hyper-express');

const Route = new HyperExpress.Router();
 

// guest routes

Route.get('/', BasicController.index);

export default Route;