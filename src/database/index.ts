import mongoose from 'mongoose';

// Conecta no banco
mongoose.connect(process.env.MONGODB_HOST || 'mongodb://localhost/roman-db');
mongoose.Promise = global.Promise;

export default mongoose;