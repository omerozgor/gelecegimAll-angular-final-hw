import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categories: Category[] = [];

  constructor() {
    // categories için mock data oluşturuldu
    this.categories = [
      {
        categoryId: 1,
        name: "music",
        creationDate: "2008-07-24T16:27:48"
      },
      {
        categoryId: 2,
        name: "sports",
        creationDate: "2008-07-25T13:21:12"
      },
      {
        categoryId: 3,
        name: "gaming",
        creationDate: "2008-07-25T18:10:23"
      },
      {
        categoryId: 4,
        name: "finance",
        creationDate: "2008-10-26T08:56:38"
      }
    ]

  }

  getAllCategories(): Category[] {
    return this.categories;
  }

  getCategoryById(categoryId: number): Category | undefined {
    return this.categories.find(category => category.categoryId === categoryId);
  }

  addCategory(category: Category): void {
    this.categories.push(category);
  }

  
  

  deleteCategory(categoryId: number): void {
    const index = this.categories.findIndex(category => category.categoryId === categoryId);
    if (index !== -1) {
      this.categories.splice(index, 1);
    }
  }
}
