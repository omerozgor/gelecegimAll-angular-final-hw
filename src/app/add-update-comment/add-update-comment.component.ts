import { Component, QueryList, ViewChildren } from '@angular/core';
import { Comment } from '../models/comment';
import { User } from '../models/user';
import { Post } from '../models/post';
import { CommentService } from '../services/comment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { PostService } from '../services/post.service';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { ValidationService } from '../services/validation.service';
declare let alertify: any; // Uyarı (alert) vermek için kullandığım dış kütüphane
@Component({
  selector: 'app-add-update-comment',
  templateUrl: './add-update-comment.component.html',
  styleUrls: ['./add-update-comment.component.css']
})
export class AddUpdateCommentComponent {
  commentId?: string;
  comment?: Comment;
  postId: number = NaN;
  userId: number = NaN;
  commentText: string = "";
  isConfirmed: boolean = false;
  creationDate: string = "";
  posts?: Post[];
  users?: User[];
  @ViewChildren(MatInput) inputs?: QueryList<MatInput>;
  @ViewChildren(MatSelect) selects?: QueryList<MatSelect>;

  constructor(private commentService: CommentService, private route: ActivatedRoute,
    private router: Router, private userService: UserService,
     private postService: PostService,private validationService: ValidationService) {

    const params = route.snapshot.params;
    this.commentId = params['id'];

    this.posts = postService.getAllPosts();
    this.users = userService.getAllUsers();

    if (this.commentId === undefined) {
// Bu component hem ekleme hem de güncelleme için ortak olduğu için açılırken
        // params'lara bakıp herhangi bir id değeri varsa güncelleme yoksa ekleme işlemi yapıyoruz
    }else{
      this.comment = commentService.getCommentById(parseInt(this.commentId))!;
      if (this.comment) { // Eğer bu id'ye ait yorum varsa ekle
        this.commentText = this.comment.comment;
        this.isConfirmed = this.comment.isConfirmed;
        this.creationDate = this.comment.creationDate;
        this.userId = this.comment.userId;
        this.postId = this.comment.postId;
      }else{ // yoksa yorumlar sayfasına geri dön
        this.router.navigate(['comments']);
      }
    }
  }

  updateComment() {
    if (this.comment) {
      if (this.validationService.validateInputs(this.inputs) && this.validationService.validateSelects(this.selects)) {
        this.comment.userId = this.userId;
        this.comment.postId = this.postId;
        this.comment.comment = this.commentText;
        this.comment.creationDate = this.creationDate;
        this.comment.isConfirmed = this.isConfirmed;
        alertify.success("Comment updated!");
        this.router.navigate(['comments']);
      }else{
        alertify.error("Please fill in the fields correctly!");
      }
      

    }
  }
  addComment() {
    if (this.validationService.validateInputs(this.inputs) && this.validationService.validateSelects(this.selects)) {
      let maxId = Math.max(...this.commentService.getAllComments().map(c =>c.commentId));
      // eklenecek yorumun id'si için
      // tüm yorumların içinde id'si en büyük olanı bulup +1 ekledim 
      this.comment = new Comment(maxId+1,this.postId,this.userId,this.commentText,this.creationDate,this.isConfirmed);
      this.commentService.addComment(this.comment);
      alertify.success("Comment added");
      this.router.navigate(['comments']);
    }else{
      alertify.error("Please fill in the fields correctly!");
    }
    
  }

}
