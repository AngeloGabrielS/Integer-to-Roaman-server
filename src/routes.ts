import { Router } from "express";
import ExampleController from "./app/controllers/ExampleController";

const routes: Router = Router();

// Rotas exemplo
routes.post('/products', ExampleController.create);
routes.get('/products', ExampleController.find);
routes.get('/products/:id', ExampleController.findOne);
routes.put('/products/:id', ExampleController.updateOne);
routes.delete('/products/:id', ExampleController.deleteOne);

export default routes;