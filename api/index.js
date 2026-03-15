import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Use the local MongoDB connection string provided or the environment variable for deployment
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected successfully to: ' + MONGODB_URI))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// --- SCHEMAS & MODELS ---

// 1. Contact Form Message Schema
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', messageSchema);

// --- ROUTES ---

// Health Check
app.get('/api', (req, res) => {
  res.json({ message: 'Portfolio API Backend is running.' });
});

// Submit a contact form message
app.post('/api/messages', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "Please fill in all fields" });
    }

    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    
    console.log(`New message saved from ${name}`);
    res.status(201).json({ success: true, data: newMessage });
  } catch (error) {
    console.error('Save message error:', error);
    res.status(500).json({ success: false, error: 'Database Server Error' });
  }
});

// Get all messages
app.get('/api/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: messages });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Database Server Error' });
  }
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Database API Server running on http://localhost:${PORT}`);
  });
}

export default app;
