import { Component, QueryList, ViewChildren } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { CategoryService } from '../services/category.service';
import { User } from '../models/user';
import { Category } from '../models/category';
import { MatInput } from '@angular/material/input';
import { ValidationService } from '../services/validation.service';
import { MatSelect } from '@angular/material/select';
declare let alertify: any; // Uyarı (alert) vermek için kullandığım dış kütüphane
@Component({
  selector: 'app-add-update-post',
  templateUrl: './add-update-post.component.html',
  styleUrls: ['./add-update-post.component.css']
})
export class AddUpdatePostComponent {
  postId?: string;
  post?: Post;
  categoryId: number = NaN;
  userId: number = NaN;
  title: string = "";
  content: string = "";
  creationDate: string ="";
  viewCount?: number;
  isPublished: boolean = false;
  users?: User[];
  categories?: Category[];
  @ViewChildren(MatInput) inputs?: QueryList<MatInput>;
  @ViewChildren(MatSelect) selects?: QueryList<MatSelect>;


  constructor(private postService: PostService, private route: ActivatedRoute,
    private router: Router, private userService: UserService,
     private categoryService: CategoryService,private validationService: ValidationService) {
  
    const params = route.snapshot.params;
    this.postId = params['id'];

    this.users = userService.getAllUsers();
    this.categories = categoryService.getAllCategories();

    if (this.postId === undefined) {
      // Bu component hem ekleme hem de güncelleme için ortak olduğu için açılırken
        // params'lara bakıp herhangi bir id değeri varsa güncelleme yoksa ekleme işlemi yapıyoruz

    } else {
      this.post = postService.getPostById(parseInt(this.postId))!;
      if (this.post) {// Eğer bu id'ye ait gönderi varsa ekle
        this.title = this.post.title;
        this.content = this.post.content;
        this.viewCount = this.post.viewCount;
        this.isPublished = this.post.isPublished;
        this.creationDate = this.post.creationDate;
        this.userId = this.post.userId;
        this.categoryId = this.post.categoryId;


      } else { // yoksa posts sayfasına geri dön
        this.router.navigate(['posts']);
      }

    }
  }

  updatePost() {
    if (this.post) {
      if (this.validationService.validateInputs(this.inputs) && this.validationService.validateSelects(this.selects)) {
      this.post.userId = this.userId;
      this.post.categoryId = this.categoryId;
      this.post.title = this.title;
      this.post.content = this.content;
      this.post.viewCount = this.viewCount!;
      this.post.isPublished = this.isPublished;
      this.post.creationDate = this.creationDate;
      alertify.success("Post updated!");
      this.router.navigate(['posts']);
      }else{
        alertify.error("Please fill in the fields correctly!");
      }
    }
  }

  addPost() {
    if (this.validationService.validateInputs(this.inputs)&& this.validationService.validateSelects(this.selects)) {
      
      let maxId = Math.max(...this.postService.getAllPosts().map(p =>p.postId));
      // eklenecek gönderinin id'si için
      // tüm gönderiler içinde id'si en büyük olanı bulup +1 ekledim 
      this.post = new Post(maxId+1,this.userId,this.categoryId,this.title,this.content,this.viewCount!,this.creationDate,this.isPublished);
      this.postService.addPost(this.post);
      alertify.success("User added!");
      this.router.navigate(['posts']);
    }else{
      alertify.error("Please fill in the fields correctly!");
    }
    
  }
}
