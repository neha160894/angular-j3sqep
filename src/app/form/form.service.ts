import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Form } from './form.model'

@Injectable()
export class FormService {
  formchanged = new Subject<Form[]>();

   private form : Form[] = [
     new Form('Neha', 837598, 'Sadar')]
  //private form : Form[] = [];

  setForms(form: Form[]) {
    this.form = form;
    this.formchanged.next(this.form.slice());
  }

  getForms() {
    return this.form.slice();
  }

  getForm(index:number) {
    return this.form[index];
  }

  addForm(form: Form) {
    this.form.push(form);
    this.formchanged.next(this.form.slice());
  }

  updateForm(index:number, newForm: Form) {
    this.form[index] = newForm;
    this.formchanged.next(this.form.slice());
  }

  deleteForm(index:number) {
    this.form.splice(index, 1);
    this.formchanged.next(this.form.slice());
  }
}