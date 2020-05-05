import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../service/http-client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

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
  spinnnerVisible = false;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private clientService: HttpClientService,
              private SpinnerService: NgxSpinnerService,
              private toastr: ToastrService) {
  }

  async ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token');

    this.form = this.fb.group({
      password: [''],
      verifypassword: ['']
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
          this.SpinnerService.show();
          this.clientService.change(this.token , password).subscribe(         data => {
            if (data) { console.log('update successful'); this.SpinnerService.hide();
              this.toastr.success('Your password has been updated', 'Success!',
                {timeOut: 5000});
            }
            },
            err => {
              this.loginInvalid = true;
              this.toastr.error('Sorry an error occured', 'Failure', {
                timeOut: 3000
              });
            });
        } catch (err) {
          this.loginInvalid = true;
          this.SpinnerService.hide();
          this.toastr.error('Sorry something went wrong , Try again', 'Failure', {
            timeOut: 3000
          });
        }
      } else {
        this.formSubmitAttempt = true;
      }
    } else {
      this.loginInvalid = true;
    }

  }
}
