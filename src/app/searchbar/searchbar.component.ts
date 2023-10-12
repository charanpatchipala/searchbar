import { Component } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent {
  searchQuery: string = '';
  isAscending: boolean = true;
  showSuggestions: boolean = false;
  suggestions: string[] = [];
  searchResults: { [key: string]: string[] } = {};

  constructor(private searchService: SearchService) {}

  toggleSuggestions() {
    this.showSuggestions = !this.showSuggestions;
    this.updateSuggestions();
  }

  updateSuggestions() {
    if (this.searchQuery.trim() !== '') {
      this.suggestions = [
        'Task 1',
        'Task 2',
        'Task 3',
        'Task 4',
        'Task 5',
      ].filter((task) =>
        task.toLowerCase().trim().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.suggestions = []; // Clear suggestions if the search query is empty
    }
    // Fetch individual search results for each suggestion
    this.suggestions.forEach((suggestion) => {
      this.searchService.fetchSearchResults(suggestion).subscribe((results) => {
        // Store results in a map
        this.searchResults[suggestion] = results;
      });
    });
  }

  toggleDirection() {
    this.isAscending = !this.isAscending;
    this.toggleSuggestions();
  }
  selectSuggestion(suggestion: string) {
    this.searchQuery = suggestion;
    this.showSuggestions = false; // Hide suggestions after selecting one
    this.suggestions.forEach((suggestion) => {
      this.searchService.fetchSearchResults(suggestion).subscribe((results) => {
        // Store results in a map
        this.searchResults[suggestion] = results;
      });
    });
  }
}
