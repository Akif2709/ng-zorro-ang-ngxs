import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Instructor } from 'src/app/models/instructors.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['card-item.component.css'],
})
export class CardItemComponent {
  @Input() instructor: Instructor;
  constructor(private readonly router: Router, private readonly route: ActivatedRoute) {}

  navigateToDetails() {
    this.router.navigate([this.instructor.id], { relativeTo: this.route });
  }

  requestAQuote(event) {
    event.stopPropagation();
    this.router.navigate(['offer', this.instructor.id], { relativeTo: this.route });
  }
}
