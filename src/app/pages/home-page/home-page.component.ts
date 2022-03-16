import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Instructor } from 'src/app/models/instructors.model';
import { StoreService } from 'src/app/store/store.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  readonly instructors$:Observable<Instructor[]> = this.storeService.instructors$;

  constructor(private storeService: StoreService) {}
  
  ngOnInit(): void {
    this.storeService.fetchInstructors();
  }

}
