import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionItemComponent } from './suggestion-item.component';

describe('SuggestionItemComponent', () => {
  let component: SuggestionItemComponent;
  let fixture: ComponentFixture<SuggestionItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuggestionItemComponent]
    });
    fixture = TestBed.createComponent(SuggestionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
