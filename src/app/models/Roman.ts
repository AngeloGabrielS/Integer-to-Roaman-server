import { Document, Model} from 'mongoose';
import mongoose from '../../database';
import RomanService from '../services/RomanService';

export interface RomanInterface extends Document {
  createdAt: Date;
  int: number;
  rom: RomanService;
}

const RomanSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  int: { type: Number, required: true },
  rom: { type: String, required: true }
});

const Roman: Model<RomanInterface> = mongoose.model('Roman', RomanSchema);

export default Roman;