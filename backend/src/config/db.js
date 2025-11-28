const mongoose = require('mongoose');

module.exports = async function connectDB() {
    const url = process.env.MONGO_URL;
        try {
            await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
            console.log('MongoDB connected');
        } catch (err) {
            console.error('MongoDB connection error:', err.message);
        process.exit(1);
    }
};