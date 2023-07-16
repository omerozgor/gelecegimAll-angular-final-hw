import { Component } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommentService } from '../services/comment.service';
import { Comment } from '../models/comment';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
declare let alertify : any; // Uyarı (alert) vermek için kullandığım dış kütüphane
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  tableHeaders: string[] = ['Title', 'View Count', 'Creation Date', 'Published'];//Table component'e göndermek için tablo başlıkları
  tableFields: any[] = ['title','viewCount','creationDate','isPublished']; // Table component'e göndermek için field isimleri
  posts: Post[] = [];
  users: User[] = [];
  categories: Category[] = [];
  actions: Map<string, boolean>; // Table component'e gönderilecek askiyonlar(Silme, güncelleme vb.) listesi
  filterUserId? : string; // user'a göre filtrelemek için 
  filterCategoryId?: string; // category'e göre filtrelemek için
  
  

  constructor(private postService: PostService, private router: Router, private commentService: CommentService,
    userService: UserService, private categoryService: CategoryService, private route: ActivatedRoute) {
     
    this.tableFields.splice(1,1)
    this.posts = postService.getAllPosts();
    
    this.users = userService.getAllUsers();
    
    this.categories = categoryService.getAllCategories();

    this.actions = new Map<string,boolean>();
    this.actions.set('update',true);
    this.actions.set('delete',true);
    this.actions.set('details',true);
  }

  deletePost(item: Post) {
    const comments: Comment[] = this.commentService.getAllComments();
    if (comments.find(c => c.postId === item.postId) === undefined) { // Gönderiye ait yorum varsa silme
      this.postService.deletePost(item.postId);
    } else {
      alertify.error("This post has at least a comment. You cannot delete this post!");
    }
  }

  goToUpdatePost(item: Post) {
    let itemId = item.postId;
    this.router.navigate(['posts/update', itemId]);
  }

  showPostDetails(item: Post) {
    let itemId = item.postId;
    this.router.navigate(['posts/', itemId]);
  }

  applyFilter() { // seçili filtreleri uygular
    this.router.navigate(
      [], 
      {
        relativeTo: this.route,
        queryParams: {page:'1',userId:this.filterUserId, categoryId: this.filterCategoryId}, 
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      });
  }
   isFiltersExists():boolean{ // geçerli filtre olup olmadığını kontrol eder
    const queryParams = this.route.snapshot.queryParamMap;

    for (const key of queryParams.keys) {
    
      if (key != 'page') {
       
        return true;
        
      }
    }
      return false;
  }

  clearFilters(){ // geçerli filtreleri temizler
    this.filterUserId = undefined;
    this.filterCategoryId = undefined;
    this.router.navigate(
      [], 
      {
        relativeTo: this.route,
        queryParams: {page:'1'}
      });
  }

  paramsChange(dataSource : MatTableDataSource<any,MatTableDataSourcePaginator>){
    // queryParams değiştiğinde tabloyu güncelleme için (filtrelemek için kullandım)
    const queryParams = this.route.snapshot.queryParams;
    
    if (queryParams['userId']) {
      
        this.posts = this.postService.getPostsByUserId(this.posts,parseInt(queryParams['userId']));
        dataSource.data = this.posts;
        
    }
    if (queryParams['categoryId']) {
      
      this.posts = this.postService.getPostsByCategoryId(this.posts,parseInt(queryParams['categoryId']))!;
      dataSource.data = this.posts;
  }
  if (!queryParams['userId'] && !queryParams['categoryId']) {
    this.posts = this.postService.getAllPosts();
    dataSource.data = this.posts;
  }
  this.posts = this.postService.getAllPosts();

  }
}
