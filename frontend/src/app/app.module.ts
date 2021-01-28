import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { EditBookComponent } from './edit-book/edit-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    AddBooksComponent,
    NavbarComponent,
    BookDetailComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
