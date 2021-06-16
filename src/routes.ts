import { Router } from "express";
import RomanController from "./app/controllers/RomanController";

const routes: Router = Router();

routes.get('/int2rom', RomanController.int2ROM);

export default routes;