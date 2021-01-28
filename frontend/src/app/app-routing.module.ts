import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBooksComponent } from './add-books/add-books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BooksListComponent } from './books-list/books-list.component';
import { EditBookComponent } from './edit-book/edit-book.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'books', component: BooksListComponent },
  { path: 'add', component: AddBooksComponent },
  { path: 'details/:id', component: BookDetailComponent },
  { path: 'update/:id', component: EditBookComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
