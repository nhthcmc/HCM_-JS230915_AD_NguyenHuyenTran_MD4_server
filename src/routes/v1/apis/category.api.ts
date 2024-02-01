import express from 'express'
const Router = express.Router();
import { categoryController } from '../../../controllers/category.controller';

Router.get('/', categoryController.findAll)
Router.post('/', categoryController.create)
Router.get('/:id', categoryController.findById)
export default Router