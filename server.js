const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // ✅ Only call once, directly

const studentRoutes = require('./routes/studentRoutes');
const enrollRoutes = require('./routes/enrollmentRoutes');
const courseRoutes = require('./routes/courseRoutes');

const app = express();
const PORT = process.env.PORT || 7000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
// app.get('/api/tasks', (req, res) => {
//   res.status(200).json({ message: 'get all tasks' });
// });

// Routes
app.use('/api/students', studentRoutes);
app.use('/api/enrollments', enrollRoutes);
app.use('/api/courses', courseRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connected");

  // Start the server **after** DB connection is successful
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((err) => console.log("MongoDB connection failed:", err));















// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();

// const connectDB = require('./db'); // ✅ Connect MongoDB from db.js

// const employeeRoutes = require('./routes/employeeRoutes');
// const departmentRoutes = require('./routes/departmentRoutes');
// const authRoutes = require('./routes/authRoutes');

// const app = express();
// const PORT = process.env.PORT || 8000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Test route
// app.get('/api/tasks', (req, res) => {
//   res.status(200).json({ message: 'get all tasks' });
// });

// // Routes
// app.use('/api/employees', employeeRoutes);
// app.use('/api/departments', departmentRoutes);
// app.use('/api/auth', authRoutes);

// // Connect to DB and Start the server
// connectDB().then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// });
