import mongoose from 'mongoose';

// Conecta no banco
mongoose.connect(process.env.MONGODB_HOST || 'mongodb://localhost/initial-db');
mongoose.Promise = global.Promise;

export default mongoose;