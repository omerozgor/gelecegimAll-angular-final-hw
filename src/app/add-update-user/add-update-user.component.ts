import { Component, QueryList, ViewChildren } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { MatInput } from '@angular/material/input';
import { ValidationService } from '../services/validation.service';
declare let alertify: any; // Uyarı (alert) vermek için kullandığım dış kütüphane
@Component({
  selector: 'app-add-update-user',
  templateUrl: './add-update-user.component.html',
  styleUrls: ['./add-update-user.component.css']
})
export class AddUpdateUserComponent {
  userId?: string;
  user?: User;
  username: string = "";
  email: string = "";
  creationDate: string = "";
  isActive: boolean = false;
  @ViewChildren(MatInput) inputs?: QueryList<MatInput>;
  constructor(private userService: UserService, route: ActivatedRoute, private router: Router,
    private validationService : ValidationService) {
    const params = route.snapshot.params;
    this.userId = params['id'];

    if (this.userId === undefined) {
      // Bu component hem ekleme hem de güncelleme için ortak olduğu için açılırken
      // params'lara bakıp herhangi bir id değeri varsa güncelleme yoksa ekleme işlemi yapıyoruz

    } else {
      this.user = userService.getUserById(parseInt(this.userId))!;
      if (this.user) { // Eğer bu id'ye ait kullanıcı varsa ekle
        this.username = this.user.username;
        this.email = this.user.email;
        this.creationDate = this.user.creationDate;
        this.isActive = this.user.isActive;
      } else {
        this.router.navigate(['users']); // yoksa users sayfasına geri dön
      }

    }


  }

  ngAfterViewInit() {
    console.log(this.inputs);

  }

  updateUser() {

    if (this.user) {
      if (this.validationService.validateInputs(this.inputs)) {
        this.user.username = this.username;
      this.user.email = this.email;
      this.user.creationDate = this.creationDate;
      this.user.isActive = this.isActive;
      alertify.success("User updated!");
      this.router.navigate(['users']);
      }else{
        alertify.error("Please fill in the fields correctly!");
      }
      

    }

  }

  addUser() {
    if(this.validationService.validateInputs(this.inputs)){
      let maxId = Math.max(...this.userService.getAllUsers().map(u => u.userId)); // eklenecek kullanıcının id'si için
      // tüm kullanıcıların içinde id'si en büyük olanı bulup +1 ekledim 
  
      this.user = new User(maxId + 1, this.username, this.email, this.creationDate, this.isActive);
      this.userService.addUser(this.user);
      alertify.success("User added!");
      this.router.navigate(['users']);
    }else{
      alertify.error("Please fill in the fields correctly!");
    }
    
  }

}
