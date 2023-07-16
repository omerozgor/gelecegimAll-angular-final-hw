import { Component, QueryList, ViewChildren } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { ValidationService } from '../services/validation.service';
declare let alertify: any; // Uyarı (alert) vermek için kullandığım dış kütüphane
@Component({
  selector: 'app-add-update-category',
  templateUrl: './add-update-category.component.html',
  styleUrls: ['./add-update-category.component.css']
})
export class AddUpdateCategoryComponent {

  categoryId?: string;
  category?: Category;
  name: string = "";
  creationDate : string = "";
  @ViewChildren(MatInput) inputs?: QueryList<MatInput>;
  @ViewChildren(MatSelect) selects?: QueryList<MatSelect>;

  constructor(private categoryService: CategoryService, private validationService : ValidationService,
    route: ActivatedRoute, private router: Router) {

    const params = route.snapshot.params;
    this.categoryId = params['id'];

    if (this.categoryId === undefined) {
        // Bu component hem ekleme hem de güncelleme için ortak olduğu için açılırken
        // params'lara bakıp herhangi bir id değeri varsa güncelleme yoksa ekleme işlemi yapıyoruz
    }else{
      this.category = categoryService.getCategoryById(parseInt(this.categoryId))!;
        if(this.category){ // Eğer bu id'ye ait kategori varsa ekle
          this.name = this.category.name;
          this.creationDate = this.category.creationDate;
        }else{
          this.router.navigate(['categories']); // yoksa kategoriler sayfasına geri dön 
        }
    }
  }


  updateCategory(){
    
    if(this.category){
      if (this.validationService.validateInputs(this.inputs) && this.validationService.validateSelects(this.selects)) {
        this.category.name = this.name;
        this.category.creationDate = this.creationDate;
        alertify.success("Category updated!");
        this.router.navigate(['categories']);
      }else{
        alertify.error("Please fill in the fields correctly!");
      }
      
    }
    
  }

  addCategory(){
    if (this.validationService.validateInputs(this.inputs) && this.validationService.validateSelects(this.selects)) {
      let maxId = Math.max(...this.categoryService.getAllCategories().map(c =>c.categoryId));
      // eklenecek kategorinin id'si için
      // tüm kategorilerin içinde id'si en büyük olanı bulup +1 ekledim 
      this.category = new Category(maxId+1,this.name,this.creationDate);
      this.categoryService.addCategory(this.category);
      alertify.success("Category added!");
      this.router.navigate(['categories']);
    }else{
      alertify.error("Please fill in the fields correctly!");
    }
    
  }

}
