import express from 'express'
const Router = express.Router();
import { categoryController } from '../../../controllers/category.controller';

Router.get('/', categoryController.findAll)
Router.post('/', categoryController.create)
Router.put('/:id', categoryController.update)
Router.delete('/:id', categoryController.delete)
export default Router