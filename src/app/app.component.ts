import { Component } from '@angular/core';
type tasks = {
  file: [''];
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todolist';
  searchQuery = '';
  showData = true;

  toggleData() {
    this.showData = !this.showData;
  }
}
