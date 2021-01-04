require('dotenv').config();

module.exports = function (app, Post) {
  /* GET home page. */
  app.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
  });

  // 게시물 전체 데이터 불러오기(홈)
  app.get("/home", function (req, res) {
    Post.find(function (err, posts) {
      if (err) return res.status(500).send({ error: "database failure" });
      res.json(posts);
    });
  });

  // 게시물 전체 데이터 불러오기(나침반)
  app.get("/main", function (req, res) {
    Post.find(function (err, posts) {
      if (err) return res.status(500).send({ error: "database failure" });
      res.json(posts);
    });
  });

  // 특정 게시물 데이터 불러오기
  app.get("/post/:id", function (req, res) {
    Post.findOne({_id: req.params.id}, function(err, post){
      if(err) return res.status(500).json({error: err});
      if(!post) return res.status(404).json({error: 'post not found'});
      res.json(post);
    })
  });


  // 게시물 저장(추가)
  app.post("/post", function (req, res) {
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

  // 게시물 수정
  app.post("/post", function (req, res) {
    Post.findById(req.body.id, function(err, post){
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

  // 게시물 삭제
  app.post("/post/delete", function (req, res) {
    Post.remove({ _id: req.body.id }, function(err, output){
      if(err) return res.status(500).json({ error: "database failure" });

      /* ( SINCE DELETE OPERATION IS IDEMPOTENT, NO NEED TO SPECIFY )
      if(!output.result.n) return res.status(404).json({ error: "book not found" });
      res.json({ message: "book deleted" });
      */

      res.status(204).end();
    })
  });

  // 게시물 좋아요, 좋아요 취소
  app.post("/post/like", function (req, res) {
    Post.findById(req.body.id, function(err, post){
      if(err) return res.status(500).json({ error: 'database failure' });
      if(!post) return res.status(404).json({ error: 'post not found' });

      if(req.body.likes_count) post.likes_count = req.body.likes_count;

      post.save(function(err){
          if(err) res.status(500).json({error: 'failed to update'});
          res.json({message: 'post updated'});
      });
    });
  });

  // 댓글 저장(추가)
  app.post("/comment", function (req, res) {
    Post.findByIdAndUpdate({'comments._id': req.body.comment_id},
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

  // 댓글 삭제
  app.post("/comment/delete", function (req, res) {
    Post.update({_id:req.body.id},
       {
          $pull: {
              "comments": { _id: req.body.comment_id }
          }
      },
      { new: true }, 
      function(err, node) {
        if (err) { return handleError(res, err); }
        return res.status(200).send("靹标车");
      });
  });

  // 댓글 좋아요, 좋아요 취소
  app.post("/comment/like", function (req, res) {
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
