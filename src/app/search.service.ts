import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchResultsSubject = new BehaviorSubject<string[]>([]);
  private searchQuery: string = '';

  getSearchQuery(): string {
    return this.searchQuery;
  }

  setSearchQuery(query: string) {
    this.searchQuery = query;
  }
  searchResults$ = this.searchResultsSubject.asObservable();
  fetchSearchResults(query: string) {
    const searchResults = this.generateSearchResults(query);
    return of(searchResults).pipe(delay(500));
  }
  // fetchSearchResults(query: string): Observable<string[]> {
  //   const searchResults = this.generateSearchResults(query);

  //   // Simulate a delay (replace with actual HTTP request)
  //   return new Observable<string[]>((observer) => {
  //     setTimeout(() => {
  //       observer.next(searchResults);
  //       observer.complete();
  //     }, 1000); // Simulate a 1-second delay
  //   });
  // }

  private generateSearchResults(query: string): string[] {
    // Generate some mock search results for the given query.
    // You can replace this with your actual search logic.
    return [
      `Result 1 for ${query}`,
      `Result 2 for ${query}`,
      `Result 3 for ${query}`,
    ];
  }
}
