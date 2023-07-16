import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { UsersComponent } from './users/users.component';
import { AddUpdateUserComponent } from './add-update-user/add-update-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { AddUpdatePostComponent } from './add-update-post/add-update-post.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { AddUpdateCategoryComponent } from './add-update-category/add-update-category.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { AddUpdateCommentComponent } from './add-update-comment/add-update-comment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HomePageComponent } from './home-page/home-page.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import {HttpClientModule } from '@angular/common/http';
import { CustomDatePipePipe } from './custom-date-pipe.pipe';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    UsersComponent,
    AddUpdateUserComponent,
    PostsComponent,
    PostDetailsComponent,
    AddUpdatePostComponent,
    CategoriesComponent,
    CategoryDetailsComponent,
    AddUpdateCategoryComponent,
    CommentsComponent,
    CommentDetailsComponent,
    AddUpdateCommentComponent,
    HeaderComponent,
    HomePageComponent,
    CustomDatePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatListModule,
    MatDividerModule,
    MatExpansionModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'tr-TR' },DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
