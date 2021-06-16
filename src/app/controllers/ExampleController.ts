import { Request, Response } from "express";;

class ExampleController {
  // método static para criação do produto
  static async create(req: Request, res: Response) {
    // cria
  }

  // método static para atualização do produto
  static async updateOne(req: Request, res: Response) {
    // atualiza
  }

  // método static para remoção do produto
  static async deleteOne(req: Request, res: Response) {
    // deleta
  }

  // método static para listar todos os produtos
  static async find(req: Request, res: Response) {
    // busca todos os itens
  }

  // método static para mostrar um produto
  static async findOne(req: Request, res: Response) {
    // busca um item
  }
}

export default ExampleController;