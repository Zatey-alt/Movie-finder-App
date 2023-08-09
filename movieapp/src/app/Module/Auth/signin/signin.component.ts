import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Shared/service.service';
import { ToastrService } from 'ngx-toastr'; // Import ToastrService from ngx-toastr

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: ServiceService,
    private router: Router,
    private toastr: ToastrService // Inject ToastrService here
  ) {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {}

  get email() {
    return this.signinForm.get('email');
  }

  get password() {
    return this.signinForm.get('password');
  }

  Onsubmit() {
    if (this.signinForm.valid) {
      const { email, password } = this.signinForm.value;
      this.authService.signin(email, password).subscribe(
        () => {
          this.router.navigate(['main-page']);
        },
        (error) => {
          this.toastr.error('Failed to sign in. Please check your credentials.');
        }
      );
    } else {
      this.toastr.warning('Please fill in all required fields.');
    }
  }

  // Helper method to access form controls easily from the template
  get formControls() {
    return this.signinForm.controls;
  }
}
