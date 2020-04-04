import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Form } from '../form.model';
import { FormService } from '../form.service';

@Component({
  selector: 'form-list',
  templateUrl: 'form-list.component.html'
})
export class FormListComponent implements OnInit, OnDestroy {
  form: Form[];
  subscription: Subscription;

  constructor(private formService: FormService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
      this.subscription = this.formService.formchanged
        .subscribe(
            (form: Form[]) => {
                this.form = form;
            }
        );
      this.form = this.formService.getForms();
  }

  onNewForm() {
      this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}