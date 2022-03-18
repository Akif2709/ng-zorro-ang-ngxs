import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Subject } from 'rxjs';
import { catchError, takeUntil } from 'rxjs/operators';
import { InstructorsHttpService } from 'src/app/services/instructors-http.service';

@Component({
  selector: 'app-send-offer-form',
  templateUrl: './send-offer-form.component.html',
  styleUrls: ['./send-offer-form.component.css'],
})
export class SendOfferFormComponent implements OnInit, OnDestroy {
  @ViewChild('alertRef') alertRef?: ElementRef;
  isConfirmLoading = false;
  isVisible = true;
  form?: FormGroup;
  offerRequestFailed = false;
  private readonly destroy$ = new Subject();

  constructor(
    private readonly fb: FormBuilder,
    private readonly instructorsHttpService: InstructorsHttpService,
    private notification: NzNotificationService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.createForm(id);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  handleCancel(): void {
    this.router.navigate(['../'], { relativeTo: this.route, replaceUrl: true });
  }

  submitForm() {
    if (this.form.valid) {
      this.isConfirmLoading = true;
      this.instructorsHttpService
        .postOffer(this.form.value)
        .pipe(catchError(this.handleError.bind(this)), takeUntil(this.destroy$))
        .subscribe(this.handleSuccess.bind(this));
    } else {
      Object.values(this.form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsTouched();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  private createForm(id: string) {
    this.form = this.fb.group({
      id: new FormControl(id, [Validators.required]),
      name: new FormControl('', [Validators.required]),
      coursePeriod: new FormControl('', [Validators.required]),
      numberOfLearners: new FormControl('', [Validators.required]),
      deliveryFormat: new FormControl('', [Validators.required]),
      venue: new FormControl('', [Validators.required]),
      budgetEstimation: new FormControl(''),
      paymentCriteria: new FormControl('', [Validators.required]),
      comment: new FormControl(''),
      language: new FormControl('', [Validators.required]),
      timezone: new FormControl('', [Validators.required]),
    });
  }

  private handleSuccess() {
    this.router.navigate(['../'], { relativeTo: this.route, replaceUrl: true });
    this.offerRequestFailed = false;
    this.isConfirmLoading = false;
    this.notification.create('success', 'Request is successfully posted', `Request name: ${this.form.value.name}`);
  }

  private handleError() {
    this.isConfirmLoading = false;
    this.offerRequestFailed = true;
    this.alertRef.nativeElement.scrollIntoView();
    throw new Error("We couldn't proceed this request");
  }
}
