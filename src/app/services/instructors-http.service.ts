import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Instructor, InstructorDetails } from '../models/instructors.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InstructorsHttpService {
  constructor(private readonly httpClient: HttpClient) {}

  getInstructors(): Observable<Array<Instructor>> {
    return this.httpClient.get<Array<Instructor>>('../../assets/mocks/list.json');
  }

  getInstructorsWithQuery(query: string): Observable<Array<Instructor>> {
    return this.httpClient.get<Array<Instructor>>('../../assets/mocks/list.json').pipe(
      map((items) =>
        items.filter((i) => {
          const name = `${i.name} ${i.surname}`.toLowerCase();
          return name.includes(query.toLowerCase());
        })
      )
    );
  }

  getInstructorDetails(id: string): Observable<InstructorDetails> {
    return this.httpClient.get<InstructorDetails>('../../assets/mocks/details.json').pipe(
      // In order to return more realistic data, this logic filters the item with id and return it
      switchMap(() => {
        return this.getInstructors().pipe(
          map((items) => {
            return items.filter((item) => item.id === id)[0] as InstructorDetails;
          })
        );
      })
    );
  }

  postOffer(payload) {
    // I used jsonplaceholder post method in order to get a real API post response
    return this.httpClient.post<string>(`https://jsonplaceholder.typicode.com/posts`, payload, {
      headers: new HttpHeaders({ 'Content-type': 'application/json; charset=UTF-8' }),
    });
  }
}
