import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Books } from '../books';
import { BooksService } from '../books.service';

@Component({

  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  book!: Observable<Books[]>;


  constructor(private BookService: BooksService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.book = this.BookService.getBooklist();
  }

  deleteProduct(id: number) {
    this.BookService.deleteBook(id).subscribe(
      (data) => {
        this.reloadData();
      },
      (error) => console.log(error)
    );

  }

  bookDetail(id: number) {
    this.router.navigate(['details', id]);
  }


}
