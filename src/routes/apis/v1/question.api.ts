import express from 'express'
const Router = express.Router();
import { questionController } from '../../../controllers/question.controller';

Router.get('/', questionController.findAll)
Router.post('/', questionController.create)
Router.put('/:id', questionController.update)
Router.delete('/:id', questionController.delete)
export default Router