import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  showHeader = false;
  showFooter = true;
  candyData: any;
  items = [
    { type: 'text', text: 'Text Item 1' },
    { type: 'image', src: 'image.jpg', alt: 'Image Item 2' },
    // Add more items as needed
  ];
  constructor(private httpclient: HttpClient) {}
  ngOnInit() {
    this.getCandy();
  }
  getCandy() {
    this.httpclient.get('http://localhost:5000/candy').subscribe((data) => {
      console.log(data);
      this.candyData = data;
    });
  }
}
