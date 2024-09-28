const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI;
        console.log('MongoDB URI in connectDB:', uri);

        if (!uri) {
            throw new Error('MongoDB URI is not defined.');
        }

        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
