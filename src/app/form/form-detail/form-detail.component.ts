import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Form } from '../form.model';
import { FormService } from '../form.service';

@Component({
  selector: 'form-detail',
  templateUrl: 'form-detail.component.html'
})
export class FormDetailComponent {
  form: Form;
  id: number;

  constructor(private formService: FormService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.form = this.formService.getForm(this.id);
        }
      );
  }

  onEditForm() {
    this.router.navigate(['edit'], {relativeTo:this.route});
  }

  onDeleteForm() {
    this.formService.deleteForm(this.id);
    this.router.navigate(['/app-form']);
  }
}