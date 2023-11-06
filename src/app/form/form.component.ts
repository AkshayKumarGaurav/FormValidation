import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      country: ['', Validators.required],
      acceptance: [false, Validators.requiredTrue],
    });
  }

  submitForm() {
    if (this.form.valid) {
      // Here, you can save the form data in the form of an object.
      const formData = this.form.value;
      console.log(formData);
    } else {
      // You can handle error messages or validation feedback here.
      console.log('Form is invalid');
    }
  }
}
