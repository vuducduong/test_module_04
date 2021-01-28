import { BooksService } from '../books.service';
import { Books } from '../books';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  books: Books = new Books();
  submitted = false;
  constructor(private BookService: BooksService,
              private router: Router,
  ) { }

  ngOnInit(): void {
  }

  newBook(): void {
    this.submitted = false;
    this.books = new Books();
  }

  save() {
    this.BookService
      .addBook(this.books).subscribe((data: any) => {
        console.log(data)
        this.books = new Books();
        this.gotoList();
      },
      (error: any) => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['books']);
  }



}
