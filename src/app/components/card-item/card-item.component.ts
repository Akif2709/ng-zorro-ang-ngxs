import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Instructor } from 'src/app/models/instructors.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['card-item.component.css'],
})
export class CardItemComponent {
  @Input() instructor: Instructor;
  @Output() onClick = new EventEmitter();
  @Output() onSendOfferClick = new EventEmitter();

  onItemClick() {
    this.onClick.emit(this.instructor.id);
  }

  requestAQuote() {
    this.onSendOfferClick.emit(this.instructor.id);
  }
}
