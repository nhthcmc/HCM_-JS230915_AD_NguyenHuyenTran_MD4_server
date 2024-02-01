import express from "express";
const Router = express.Router();

import categoryApi from './apis/category.api';
import questionApi from './apis/question.api'
Router.use('/categories', categoryApi);
Router.use('/questions', questionApi)

export default Router;