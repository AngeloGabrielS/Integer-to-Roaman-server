import { Document, Model} from 'mongoose'; // importa-se a propiedade/"padrão" do local 'mongoose'
import mongoose from '../../database';
import RomanService from '../services/RomanService';

export interface RomanInterface extends Document { // exporta-se a interface do document
  createdAt: Date;                    // armazena a data para inserir no banco de dados 
  int: number;                        // inseri o numero ditado no campo int   
  rom: RomanService;                  // irá receber a roman_num
}
// alimenta a o "schema*" do banco  *fomato de armazenamento do banco
const RomanSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },           // da caracteristicas ao campo como tipo/ e nesse caso do date pega a data do sistema 
  int: { type: Number, required: true },                  // e no caso do int e rom ele demarca os campos como obrigatorios alem de caracterisar seus tipos de variaveis
  rom: { type: String, required: true }
});

const Roman: Model<RomanInterface> = mongoose.model('Roman', RomanSchema); // cria-se uma varivel para retornar com valores para salvar no banco de dados 

export default Roman; //exporta o padão roman
