import { Component } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import {Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { CommentService } from '../services/comment.service';
import { Post } from '../models/post';
import { Comment } from '../models/comment';
declare let alertify: any; // Uyarı (alert) vermek için kullandığım dış kütüphane
@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent{

  tableHeaders: string[] = ['Username', 'Email', 'Creation Date', 'Active']; // Table component'e göndermek için tablo başlıkları
  tableFields : any[] = ['username','email','creationDate','isActive']; // Table component'e göndermek için field isimleri
  users: User[] = [];
  actions : Map<string,boolean>; // Table component'e gönderilecek askiyonlar(Silme, güncelleme vb.) listesi
  

  constructor(private userService: UserService,private router:Router,
    private postService : PostService, private commentService : CommentService) {
    this.users = userService.getAllUsers();
    this.actions = new Map<string,boolean>();
    this.actions.set('update',true);
    this.actions.set('delete',true);
    this.actions.set('details',false); // Kullanıcılar için detay gösterme işlemi yok
  }
  
  deleteUser(item:User){ // table component'ten output ile gelen user nesnesini silme
    const posts: Post[] = this.postService.getAllPosts();
    const comments: Comment[] = this.commentService.getAllComments();
    if (this.users.length > 1) { // eğer 1'den fazla kullanıcı varsa
      if (posts.find(p => p.userId === item.userId) === undefined
       && comments.find(c => c.userId === item.userId) === undefined){ // Kullanıcının yorumu veya gönderisi olup olmadığını
        //kontrol ediyoruz
        this.userService.deleteUser(item.userId);
      }else{  
        alertify.error("This user has at least a post or a comment. You cannot delete this user!");
      }
    }else{
      alertify.error("This is the only user. You cannot delete this user!");
    }
    
    
  }

  goToUpdateUser(item:User){// Table componentten output ile alınan User nesnesi için update ekranını açar
    let itemId = item.userId;
    this.router.navigate(['users/update',itemId]);
  }
  
}
