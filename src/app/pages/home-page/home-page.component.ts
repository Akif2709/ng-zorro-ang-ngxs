import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Instructor, SortingKinds } from 'src/app/models/instructors.model';
import { StoreService } from 'src/app/store/store.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  instructors$: Observable<Instructor[]> = this.storeService.instructors$;

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService.fetchInstructors();
  }

  onSearch(value: string) {
    this.storeService.searchInstructor(value);
  }

  onSorting(value: SortingKinds) {
    this.instructors$ = this.instructors$.pipe(map((list) => this.handleSorting(list, value)));
  }

  private handleSorting(list: Instructor[] = [], sortingType: SortingKinds) {
    const arrayState = list.slice();
    const fullName = (item) => item.name.concat(item.surname).toLowerCase()
    switch (sortingType) {
      case SortingKinds.AlphabeticalASC:
        return arrayState.sort((a, b) => fullName(a).localeCompare(fullName(b)));
      case SortingKinds.AlphabeticalDESC:
        return arrayState.sort((a, b) => fullName(b).localeCompare(fullName(a)));
      case SortingKinds.RatingASC:
        return arrayState.sort((a, b) => a.rating - b.rating);
      case SortingKinds.RatingDESC:
        return arrayState.sort((a, b) => b.rating - a.rating);
      case SortingKinds.StartRateASC:
        return arrayState.sort((a, b) => a.startRate - b.startRate);
      case SortingKinds.StartRateDESC:
        return arrayState.sort((a, b) => b.startRate - a.startRate);

    }
    return arrayState;
  }
}
