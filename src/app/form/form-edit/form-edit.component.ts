import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FormService } from '../form.service';

@Component({
  selector: 'form-edit',
  templateUrl: 'form-edit.component.html'
})
export class FormEditComponent {
    id: number;
    editMode = false;
    inputForm: FormGroup;

    constructor(private route: ActivatedRoute,
                private formService: FormService,
                private router: Router) {}

    ngOnInit() {
      this.route.params
        .subscribe(
          (params: Params) => {
              this.id = +params['id'];
              this.editMode = params['id'] != null;
              this.initForm();
          }
        );
    }

    onSubmit() {
      if (this.editMode) {
          this.formService.updateForm(this.id, this.inputForm.value);
      } else {
          this.formService.addForm(this.inputForm.value);
      }
      this.onCancel();
    }


    onCancel() {
      this.router.navigate(['../'], {relativeTo: this.route});
    }

    private initForm() {
        let formName = '';
        let formMobile :number;
        let formAddress = '';

        if(this.editMode) {
            const form = this.formService.getForm(this.id);
            formName = form.name;
            formMobile = form.mobile;
            formAddress = form.address;
        }
        this.inputForm = new FormGroup({
            'name' : new FormControl(formName, Validators.required),
            'mobile' : new FormControl(formMobile, Validators.required),
            'address': new FormControl(formAddress, Validators.required)
        });
    }
}