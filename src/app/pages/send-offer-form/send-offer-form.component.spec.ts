import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendOfferFormComponent } from './send-offer-form.component';

describe('SendOfferFormComponent', () => {
  let component: SendOfferFormComponent;
  let fixture: ComponentFixture<SendOfferFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SendOfferFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendOfferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
