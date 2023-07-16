import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  tableHeaders: string[] = ['Category Name', 'Creation Date']; // Table component'e göndermek için tablo başlıkları
  tableFields: any[] = ['name','creationDate' ]; // Table component'e göndermek için field isimleri
  categories: Category[] = []; // Table component'e gönderilecek Category listesi
  actions: Map<string, boolean>; // Table component'e gönderilecek askiyonlar(Silme, güncelleme vb.) listesi

  constructor(private categoryService : CategoryService,private router : Router){
    this.categories = categoryService.getAllCategories();

    this.actions = new Map<string,boolean>();
    this.actions.set('update',true);
    this.actions.set('delete',false); // Kategoriler için silme işlemi yok
    this.actions.set('details',true);
  }

  deleteCategory(item: Category) { // Table component'ten output ile gelen Category nesnesini siler
    this.categoryService.deleteCategory(item.categoryId);
  }

  goToUpdateCategory(item: Category) { // Table componentten output ile alınan Category nesnesi için update ekranını açar
    let itemId = item.categoryId;
    this.router.navigate(['categories/update', itemId]);
  }

  showCategoryDetails(item: Category) {  //Table componentten output ile alınan Category nesnesi için details ekranını açar
    let itemId = item.categoryId;
    this.router.navigate(['categories/', itemId]);
  }
}
