import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AddUpdateUserComponent } from './add-update-user/add-update-user.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { AddUpdatePostComponent } from './add-update-post/add-update-post.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { AddUpdateCategoryComponent } from './add-update-category/add-update-category.component';
import { CommentsComponent } from './comments/comments.component';
import { AddUpdateCommentComponent } from './add-update-comment/add-update-comment.component';
import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/update/:id', component: AddUpdateUserComponent },
  { path: 'users/add', component: AddUpdateUserComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/add', component: AddUpdatePostComponent },
  { path: 'posts/:id', component: PostDetailsComponent },
  { path: 'posts/update/:id', component: AddUpdatePostComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/add', component: AddUpdateCategoryComponent },
  { path: 'categories/:id', component: CategoryDetailsComponent },
  { path: 'categories/update/:id', component: AddUpdateCategoryComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'comments/add', component: AddUpdateCommentComponent },
  { path: 'comments/:id', component: CommentDetailsComponent },
  { path: 'comments/update/:id', component: AddUpdateCommentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
