import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../service/http-client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {
  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;
  private token: string = null;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private clientService: HttpClientService) {
  }

  async ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token');

    this.form = this.fb.group({
      password: ['', Validators.email],
      verifypassword: ['', Validators.required]
    });

    /* if (await this.authService.checkAuthenticated()) {
       await this.router.navigate([this.returnUrl]);
     }*/
  }

  async onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.get('password').value === this.form.get('verifypassword').value) {
      if (this.form.valid) {
        try {
          const password = this.form.get('password').value;
          const verifypassword = this.form.get('verifypassword').value;
          await this.clientService.change(this.token, password);
        } catch (err) {
          this.loginInvalid = true;
        }
      } else {
        this.formSubmitAttempt = true;
      }
    } else {
      this.loginInvalid = true;
    }

  }
}
