import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Posts {
  description: string;
  author: string;
  title: string;
  personId: string;
  id: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent {
  posts: Posts[] = [];

  isLoading = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.isLoading = true;
    this.http.get<Posts[]>('https://it-blog-posts.herokuapp.com/api/posts')
    .subscribe((response) => {
      this.posts = response;
      this.isLoading = false;
    })
  }
}