import { Injectable } from '@angular/core';

import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Instructor, InstructorDetails } from '../models/instructors.model';
import { InstructorsActions } from './actions';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private _instructors$ = this.store.select((state) => state.instructors.instructors);
  private _instructorDetails$ = this.store.select((state) => state.instructors.instructorDetail);

  get instructors$(): Observable<Array<Instructor>> {
    return this._instructors$;
  }
  get instructorDetails$(): Observable<InstructorDetails> {
    return this._instructorDetails$;
  }

  constructor(private readonly store: Store) {}

  fetchInstructors() {
    this.store.dispatch(InstructorsActions.FetchList);
  }

  fetchInstructorDetails(id: string) {
    this.store.dispatch(new InstructorsActions.FetchDetails(id));
  }

  searchInstructor(query: string) {
    this.store.dispatch(new InstructorsActions.FetchWithQuery(query));
  }
}
