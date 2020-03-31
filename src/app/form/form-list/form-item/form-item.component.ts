import { Component, Input } from '@angular/core';
import { Form } from '../../form.model';

@Component({
  selector: 'form-item',
  templateUrl: 'form-item.component.html'
})
export class FormItemComponent {
  @Input() form: Form;
  @Input() index: number;
}