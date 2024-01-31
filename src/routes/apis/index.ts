import express from "express";
const Router = express.Router();

import categoryApi from './v1/category.api';
import questionApi from './v1/question.api'
Router.use("/v1", categoryApi, questionApi)
export default Router;