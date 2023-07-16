import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../models/category';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent {

  categoryId: string;
  category?: Category;
  postCount: number = 0;


  constructor(private categoryService: CategoryService, private route: ActivatedRoute, private postService: PostService) {

    const params = route.snapshot.params;
    this.categoryId = params['id'];

    if (this.categoryId) {
      this.category = categoryService.getCategoryById(parseInt(this.categoryId));
      this.postCount = this.postService.getAllPosts().filter(p => p.categoryId === parseInt(this.categoryId!)).length;
    }
  }
}
