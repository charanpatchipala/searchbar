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
  lastSelectedSuggestions: string[] = [];

  constructor(private searchService: SearchService) {
    this.searchQuery = this.searchService.getSearchQuery();
  }

  updateSearchQuery() {
    this.searchService.setSearchQuery(this.searchQuery);
  }

  ngOnInit() {
    // Retrieve the last selected suggestions from local storage
    // const lastSuggestionsJSON = localStorage.getItem('lastSelectedSuggestions');
    // if (lastSuggestionsJSON) {
    //   this.lastSelectedSuggestions = JSON.parse(lastSuggestionsJSON);
    //   // Display the last selected suggestion if there is at least one
    //   if (this.lastSelectedSuggestions.length > 0) {
    //     this.searchQuery =
    //       this.lastSelectedSuggestions[this.lastSelectedSuggestions.length - 1];
    //   }
    // }
  }

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
    this.performSearch();
  }

  performSearch() {
    this.suggestions.forEach((suggestion) => {
      this.searchService.fetchSearchResults(suggestion).subscribe((results) => {
        this.searchResults[suggestion] = results;
      });
    });
  }
  toggleDirection() {
    this.isAscending = !this.isAscending;
    this.toggleSuggestions();
  }
  selectSuggestion(suggestion: string) {
    this.searchService.setSearchQuery(suggestion);
    this.searchQuery = suggestion;

    this.showSuggestions = false; // Hide suggestions after selecting one

    this.updateSuggestions();

    // this.lastSelectedSuggestions.push(suggestion);

    // // Limit the list to a certain number of suggestions if needed
    // // For example, to keep the last 5 suggestions:
    // if (this.lastSelectedSuggestions.length > 5) {
    //   this.lastSelectedSuggestions.shift();
    // }

    // // Save the list of last selected suggestions to local storage
    // localStorage.setItem(
    //   'lastSelectedSuggestions',
    //   JSON.stringify(this.lastSelectedSuggestions)
    // );
  }
  // openSearchBar() {
  //   if (this.lastSelectedSuggestions.length > 0) {
  //     this.searchQuery =
  //       this.lastSelectedSuggestions[this.lastSelectedSuggestions.length - 1];
  //     this.showSuggestions = true;
  //   }
  // }
}
