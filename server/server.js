const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection (with DB name specified)
mongoose.connect('mongodb://localhost:27017/storyDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Schema & Model
const StorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    feedback: { type: String, required: true },
});

const Story = mongoose.model('Story', StorySchema);

// POST route to save a story
app.post('/api/story', async (req, res) => {
    try {
        const story = new Story(req.body);
        await story.save();
        res.status(201).json({ message: 'Story saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save story', details: error.message });
    }
});

// GET route to fetch all stories
app.get('/api/stories', async (req, res) => {
    try {
        const stories = await Story.find();
        res.status(200).json(stories);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch stories' });
    }
});

// Root route
app.get('/', (req, res) => {
    res.send('Server is running.');
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
