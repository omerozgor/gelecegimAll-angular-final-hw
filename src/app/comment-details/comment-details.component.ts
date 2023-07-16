import { Component } from '@angular/core';
import { Comment } from '../models/comment';
import { Post } from '../models/post';
import { User } from '../models/user';
import { CommentService } from '../services/comment.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent {

  commentId?: string;
  comment?: Comment;
  postTitle?: string;
  username?: string;
  posts?: Post[];
  users?: User[];

  constructor(private commentService: CommentService, route: ActivatedRoute,
    private userService: UserService, private postService: PostService) {

    const params = route.snapshot.params;

    this.commentId = params['id'];
    if (this.commentId) {
      this.comment = this.commentService.getCommentById(parseInt(this.commentId));
      this.posts = postService.getAllPosts();
      this.users = userService.getAllUsers();
      this.postTitle = this.posts.find(p => p.postId === this.comment?.postId)?.title;
      this.username = this.users.find(u => u.userId === this.comment?.userId)?.username;
    }

  }
}
