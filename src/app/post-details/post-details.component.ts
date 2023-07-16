import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../models/post';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {

  postId?: string;
  post?: Post;
  username?: string;
  category?: string;
  users?: User[];
  categories?: Category[];
  comments?:CommentTableItem[];
  commentUsername?: string;
  panelOpenState = false;

  constructor(private postService: PostService, route: ActivatedRoute,private router : Router,
    private userService: UserService, private categoryService: CategoryService, private commentService:CommentService) {

    const params = route.snapshot.params;

    this.postId = params['id'];
    if (this.postId) {
      this.post = this.postService.getPostById(parseInt(this.postId));
      if (this.post) {
        this.users = userService.getAllUsers();
      this.categories = categoryService.getAllCategories();
      this.username = this.users.find(u => u.userId === this.post?.userId)?.username;
      this.category = this.categories.find(c => c.categoryId === this.post?.categoryId)?.name;
      
      this.comments = this.commentService.getAllComments().filter(c => c.postId === parseInt(this.postId!)).
      map(c => new CommentTableItem(c.comment,this.users?.find(u => u.userId === c.userId)?.username!,c.creationDate));
      }else{
        this.router.navigate(['posts']);
      }
    }
  }
}

class CommentTableItem { // Bu sayfada gösterilecek gönderiye ait yorumlar tablosu için yeni bir sınıf oluşturdum
  comment:string;
  username:string;
  creationDate: string;
  constructor(comment:string,username:string,creationDate : string) {
    this.comment = comment;
    this.username = username;
    this.creationDate = creationDate;
  }
}
