import { Component } from '@angular/core';
import { Comment } from '../models/comment';
import { CommentService } from '../services/comment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

  tableHeaders: string[] = ['Comment', 'Creation Date', 'Confirmed'];
  tableFields: any[] = ['comment','creationDate','isConfirmed']; // Table component'e göndermek için field isimleri
  comments: Comment[] = [];
  users: User[] = [];
  filterUserId? : number;
  actions: Map<string, boolean>;

  constructor(private commentService: CommentService,private userService : UserService, 
    private router: Router,private route : ActivatedRoute) {
  
    this.comments = commentService.getAllComments();
    this.users = this.userService.getAllUsers();
   

    this.actions = new Map<string,boolean>();
    this.actions.set('update',true);
    this.actions.set('delete',true);
    this.actions.set('details',true);

  }

  deleteComment(item: Comment) {
    this.commentService.deleteComment(item.commentId);
  }

  goToUpdateComment(item: Comment) {
    let itemId = item.postId;
    this.router.navigate(['comments/update', itemId]);
  }

  showCommentDetails(item: Comment) {
    let itemId = item.commentId;
    this.router.navigate(['comments/', itemId]);
  }

  applyFilter() { // seçili filtreleri uygular
    this.router.navigate(
      [], 
      {
        relativeTo: this.route,
        queryParams: {page:'1',userId:this.filterUserId}, 
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      });
  }
   isFiltersExists():boolean{ // filtre olup olmadığını kontrol eder
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
      
        this.comments = this.commentService.getCommentsByUserId(parseInt(queryParams['userId']));
        dataSource.data = this.comments;
       
    }
    
  if (!queryParams['userId']) {
    this.comments = this.commentService.getAllComments();
    dataSource.data = this.comments;
    
  }

  }
}
