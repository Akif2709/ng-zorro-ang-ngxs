import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { InstructorDetails } from 'src/app/models/instructors.model';
import { StoreService } from 'src/app/store/store.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
})
export class DetailsPageComponent implements OnInit {
  @Output() openRequestQuoteModal = new EventEmitter<void>();
  readonly instructorDetails$: Observable<InstructorDetails> = this.storeService.instructorDetails$;

  constructor(private readonly route: ActivatedRoute, private storeService: StoreService, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.storeService.fetchInstructorDetails(id);
  }

  requestQuote(id: string): void {
    this.router.navigate(['form', { id }], { relativeTo: this.route, replaceUrl: true });
  }
}
