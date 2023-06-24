import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm!: FormGroup;
  baseUrl = 'https://localhost:7106/api/v1.0/shopping/';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toast: ToastrService,
    private httpClient: HttpClient,
    private loader: NgxUiLoaderService
  ) {}

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['dashboard']);
    }
    this.signupForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      contactNumber: new FormControl(null, Validators.required),
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      repassword: new FormControl(null, Validators.required),
      role: new FormControl(null, Validators.required),
    });
  }

  signUpSubmit() {
    if(localStorage.getItem('token')) {
      this.router.navigate(['dashboard'])
    }
    this.loader.start();
    let url = this.baseUrl + 'register';
    let payload = {
      firstName: this.signupForm.value.firstName,
      lastName: this.signupForm.value.lastName,
      email: this.signupForm.value.email,
      contactNumber: this.signupForm.value.contactNumber.toString(),
      loginId: this.signupForm.value.userName,
      password: this.signupForm.value.password,
      role: this.signupForm.value.role,
    };
    this.httpClient.post(url, payload).subscribe(
      (result: any) => {
        if (result.success) {
          this.loader.stop();
          this.toast.success(
            'Registration successful, please login to continue',
            'Success',
            {
              timeOut: 2000,
            }
          );
          this.router.navigate(['login']);
        } else {
          this.loader.stop();
          this.toast.error('Username or Email already exists', 'Error', {
            timeOut: 2000,
          });
        }
      },
      (error: any) => {
        this.loader.stop();
        this.toast.error('Username or Email already exists', 'Error', {
          timeOut: 2000,
        });
      }
    );
  }
}
