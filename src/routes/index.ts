import express from 'express'
const Router = express.Router();

import v1 from './apis';
Router.use("v1", v1)
export default Router