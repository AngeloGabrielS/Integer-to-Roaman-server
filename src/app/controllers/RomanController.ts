import { Request, Response } from "express";
import Roman from "../models/Roman";
import RomanService from "../services/RomanService";

class RomanController {
  // método static para converter ROM
  static async int2ROM(req: Request, res: Response) {
    const { int } = req.query;
    const num = Number(int);

    if(num <= 0 || num > 999 || !num) {
      return res.status(400).json({ message: 'Only numbers from 1 to 999' });
    }
    
    const romRoman = RomanService.int2ROM(int as string);

    const createdRoman = await Roman.create({int, rom: romRoman});

    return res.status(200).json(createdRoman);
  }
}
export default RomanController;