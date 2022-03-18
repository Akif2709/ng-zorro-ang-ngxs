import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { merge, Subject } from 'rxjs';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';
import { SortingKinds } from 'src/app/models/instructors.model';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css'],
})
export class SearchFieldComponent implements OnInit, OnDestroy {
  readonly searchInputControl = new FormControl();
  readonly sortingInputControl = new FormControl();
  @Output() searchInputValue = new EventEmitter<string>();
  @Output() sortingInputValue = new EventEmitter<SortingKinds>();
  private readonly destroy$ = new Subject();
  readonly sortingKinds = SortingKinds;

  ngOnInit(): void {
    merge(
      this.searchInputControl.valueChanges.pipe(
        debounceTime(500),
        tap((value) => this.searchInputValue.emit(value))
      ),
      this.sortingInputControl.valueChanges.pipe(tap((value) => this.sortingInputValue.emit(value)))
    )
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
