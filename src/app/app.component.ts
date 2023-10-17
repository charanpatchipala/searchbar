import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
type tasks = {
  file: [''];
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'todolist';
  searchQuery = '';
  showData = true;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .post('https://fakestoreapi.com/products', { price: '300' })
      .subscribe((data) => {
        console.log(data);
      });
  }
  toggleData() {
    this.showData = !this.showData;
  }
}
