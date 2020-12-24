require('dotenv').config();

module.exports = function (app, Post) {
  /* GET home page. */
  app.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
  });

  // GET ALL POST
  app.get("/api/posts", function (req, res) {
    Post.find(function (err, posts) {
      if (err) return res.status(500).send({ error: "database failure" });
      res.json(posts);
    });
  });

  // GET SINGLE POST
  app.get("/api/post/:id", function (req, res) {
    Post.findOne({_id: req.params.id}, function(err, post){
      if(err) return res.status(500).json({error: err});
      if(!post) return res.status(404).json({error: 'post not found'});
      res.json(post);
    })
  });

  // GET BOOK BY AUTHOR
  app.get("/api/books/author/:author", function (req, res) {
    Book.find({author: req.params.author}, {_id: 0, title: 1, published_date: 1},  function(err, books){
      if(err) return res.status(500).json({error: err});
      if(books.length === 0) return res.status(404).json({error: 'book not found'});
      res.json(books);
    })
  });

  // CREATE BOOK
  app.post("/api/posts", function (req, res) {
    var post = new Post();
    post.post_id = req.body.post_id;
    post.contents = req.body.contents;
    post.comments_count = req.body.comments_count;
    post.likes_count = req.body.likes_count;
    post.comments = req.body.comments;
    post.post_time = new Date();

    post.save(function (err) {
      if (err) {
        console.error(err);
        res.json({ result: 0 });
        return;
      }

      res.json({ result: 1 });
    });
  });

  // UPDATE THE BOOK
  app.put("/api/books/:book_id", function (req, res) {
    Book.findById(req.params.book_id, function(err, book){
      if(err) return res.status(500).json({ error: 'database failure' });
      if(!book) return res.status(404).json({ error: 'book not found' });

      if(req.body.title) book.title = req.body.title;
      if(req.body.author) book.author = req.body.author;
      if(req.body.published_date) book.published_date = req.body.published_date;

      book.save(function(err){
          if(err) res.status(500).json({error: 'failed to update'});
          res.json({message: 'book updated'});
      });
    });
  });

  // DELETE BOOK
  app.delete("/api/books/:book_id", function (req, res) {
    Book.remove({ _id: req.params.book_id }, function(err, output){
      if(err) return res.status(500).json({ error: "database failure" });

      /* ( SINCE DELETE OPERATION IS IDEMPOTENT, NO NEED TO SPECIFY )
      if(!output.result.n) return res.status(404).json({ error: "book not found" });
      res.json({ message: "book deleted" });
      */

      res.status(204).end();
    })
  });
};
