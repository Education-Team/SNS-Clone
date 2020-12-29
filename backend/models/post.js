var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    post_id: String,
    contents: String,
    comments_count: Number,
    likes_count: Number,
    comments: [
        {
            comment_id: String,
            comment: String,
            likes_count: Number,
        }
    ],
    post_time: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('post', postSchema);