import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import INSTRUCTORS from '../../assets/mocks/list.json';
import INSTRUCTOR_DETAILS from '../../assets/mocks/details.json';
import { Instructor, InstructorDetails } from '../models/instructors.model';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InstructorsHttpService {
  constructor(private readonly httpClient: HttpClient) {}

  getInstructors(): Observable<Array<Instructor>> {
    return this.httpClient.get<Array<Instructor>>(
      '../../assets/mocks/list.json'
    );
  }

  getInstructorDetails(id: string): Observable<InstructorDetails> {
    return this.httpClient
      .get<InstructorDetails>('../../assets/mocks/details.json')
      .pipe(
        switchMap(() => {
          return this.getInstructors().pipe(
            map(
              (items) =>
                {
                  console.log(items, id)
                  return items.filter((item) => item.id === id)[0] as InstructorDetails}
            )
          );
        })
      );
  }
}
