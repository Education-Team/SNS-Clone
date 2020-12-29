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

  // CREATE POST
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

  // UPDATE THE POST
  app.put("/api/posts/:post_id", function (req, res) {
    Post.findById(req.params.post_id, function(err, post){
      if(err) return res.status(500).json({ error: 'database failure' });
      if(!post) return res.status(404).json({ error: 'post not found' });

      if(req.body.post_id) post.post_id = req.body.post_id;
      if(req.body.contents) post.contents = req.body.contents;
      if(req.body.comments_count) post.comments_count = req.body.comments_count;

      post.save(function(err){
          if(err) res.status(500).json({error: 'failed to update'});
          res.json({message: 'post updated'});
      });
    });
  });

  // UPDATE THE POST
  app.put("/api/posts/:id/:idcomment", function (req, res) {
    Post.update({_id:req.params.id},
       {
          $pull: {
              "comments": { _id: req.params.idcomment }
          }
      },
      { new: true }, 
      function(err, node) {
        if (err) { return handleError(res, err); }
        return res.status(200).send("靹标车");
      });
  });

  // UPDATE THE POST
  app.put("/api/posts/aa/:id/:idcomment", function (req, res) {
    Post.findByIdAndUpdate({'comments._id': req.params.idcomment},
       {
          $set: {
              "comments.$.comment_id": 'update_array',
              "comments.$.comment": 'update_comment' 
          }
      },
      { new: true }, 
      function(err, node) {
        if (err) { return handleError(res, err); }
        return res.status(200).send("靹标车");
      });
  });

  // DELETE POST
  app.delete("/api/posts/:_id", function (req, res) {
    Post.remove({ _id: req.params._id }, function(err, output){
      if(err) return res.status(500).json({ error: "database failure" });

      /* ( SINCE DELETE OPERATION IS IDEMPOTENT, NO NEED TO SPECIFY )
      if(!output.result.n) return res.status(404).json({ error: "book not found" });
      res.json({ message: "book deleted" });
      */

      res.status(204).end();
    })
  });
	
	
	
	
	
	
  app.get("/test/:id", function (req, res) {
    Post.findOneAndUpdate(
		{_id : req.params.id}, 
		{$inc:  { 
			 		likes_count : 1
				} 
		},
		{ new: true }, 
		function (err, posts) {
		  if (err) return res.status(500).send({ error: "database failure" });
		  res.json(posts);
		});
  });
	
};
