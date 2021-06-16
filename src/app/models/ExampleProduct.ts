import { Document, Model } from 'mongoose';
import mongoose from '../../database';

export interface ExampleProductInterface extends Document {
  createdAt: Date;
  description: string;
  name: string;
  picture_url: string;
  price: number;
  weight: number;
};

const ExampleProductSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  description: { type: String, required: true },
  name: { type: String, required: true },
  picture_url: { type: String, required: true },
  price: { type: Number, required: true },
  weight: { type: Number, required: true }
});

const ExampleProduct: Model<ExampleProductInterface> = mongoose.model('ExampleProduct', ExampleProductSchema);

export default ExampleProduct;