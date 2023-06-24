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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  baseUrl = 'https://localhost:7106/api/v1.0/shopping/';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toast: ToastrService,
    private httpClient: HttpClient,
    private loader: NgxUiLoaderService
  ) {}

  ngOnInit() {
    if(localStorage.getItem('token')) {
      this.router.navigate(['dashboard']);
    }
    this.loginForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  logIn() {
    this.loader.start();
    let url = this.baseUrl + 'login';
    let payload = {
      loginId: this.loginForm.value.userName,
      password: this.loginForm.value.password,
    };
    this.httpClient.post(url, payload).subscribe(
      (result: any) => {
        if (result.success) {
          localStorage.setItem('token', result.token);
          this.loader.stop();
          this.toast.success("You're successfully logged in", 'Success', {
            timeOut: 2000,
          });
          this.router.navigate(['dashboard']);
        } else {
          this.loader.stop();
          this.toast.error('Something went wrong. Please try again', 'Error', {
            timeOut: 2000,
          });
        }
      },
      (error: any) => {
        this.loader.stop();
        this.toast.error('Invalid credentials', 'Error', { timeOut: 2000 });
      }
    );
  }
}
