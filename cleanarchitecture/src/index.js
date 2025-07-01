const mongoose = require('mongoose');
const createServer = require('./infrastructure/webserver/server');
const createStudentRouter = require('./infrastructure/webserver/routes');

const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://127.0.0.1:27017/studentDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('✅ MongoDB connected');

    const studentRoutes = createStudentRouter();
    const app = createServer(studentRoutes);

    app.listen(PORT, () => {
        console.log(`🚀 Server is running on port ${PORT}`);
    });
})
.catch(err => {
    console.error('❌ MongoDB connection failed:', err.message);
});
