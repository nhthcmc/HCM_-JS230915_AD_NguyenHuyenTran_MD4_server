import express from 'express'
const Router = express.Router();
import { questionController } from '../../../controllers/question.controller';

Router.get('/', questionController.findAll)
Router.get('/', questionController.findWithConditon)
Router.get('/:id/answer', questionController.findByIdWithAnswer)
Router.post('/', questionController.create)
Router.get('/:id', questionController.findById)
export default Router