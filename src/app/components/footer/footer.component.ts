import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  loginForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    email: new FormControl('', Validators.required),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(15),
      Validators.maxLength(100),
    ]),
  });

  Submit(e: Event) {
    e.preventDefault();
    console.warn(this.loginForm.value);
    this.loginForm.reset();
  }
}
