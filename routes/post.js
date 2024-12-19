const express = require('express');
const Post = require('../models/Post');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, async (req, res) => {
    const { title, topic, body, expiration } = req.body;
    const post = new Post({
        title,
        topic,
        body,
        expiration,
        owner: req.user.name
    });

    await post.save();
    res.send(post);
});

router.get('/:topic', auth, async (req, res) => {
    const posts = await Post.find({ topic: req.params.topic, status: 'Live' });
    res.send(posts);
});

module.exports = router;
