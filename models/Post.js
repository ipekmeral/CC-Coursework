const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    topic: { type: String, enum: ['Politics', 'Health', 'Sport', 'Tech'] },
    body: String,
    expiration: Date,
    status: { type: String, enum: ['Live', 'Expired'], default: 'Live' },
    owner: String,
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    comments: [String]
});

module.exports = mongoose.model('Post', postSchema);
