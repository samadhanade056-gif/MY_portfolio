import express from 'express';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Set up Supabase Client
const supabaseUrl = process.env.SUPABASE_URL || 'https://ylxsbmifiadhbbyyhmss.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'sb_publishable_PoMO124whDtgafK8s5TqfA_z4d8A3Oc';
const supabase = createClient(supabaseUrl, supabaseKey);

console.log('✅ Supabase Client Initialized');

// --- ROUTES ---

// Health Check
app.get('/api', (req, res) => {
  res.json({ message: 'Portfolio API Backend (Supabase Client) is running.' });
});

// Submit a contact form message
app.post('/api/messages', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "Please fill in all fields" });
    }

    const { data, error } = await supabase
      .from('messages')
      .insert([{ name, email, message }])
      .select();
      
    if (error) throw error;
    
    console.log(`New message saved from ${name}`);
    res.status(201).json({ success: true, data: data[0] });
  } catch (error) {
    console.error('Save message error:', error);
    res.status(500).json({ success: false, error: 'Database Server Error' });
  }
});

// Get all messages
app.get('/api/messages', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (error) throw error;

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Fetch messages error:', error);
    res.status(500).json({ success: false, error: 'Database Server Error' });
  }
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Database API Server running on http://localhost:${PORT}`);
  });
}

export default app;
