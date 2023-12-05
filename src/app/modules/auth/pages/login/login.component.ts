import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/utils/services/share/share.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router, private shareService: ShareService) {}

  isErrorForm: boolean = false;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl(''),
  });

  login(event: Event) {
    event.preventDefault();
    if(this.loginForm.invalid) {
      this.isErrorForm = true;
    } else {
      this.isErrorForm = false;
      console.log(this.loginForm.value);
      this.router.navigate(["/dashboard"]);
      this.shareService.setValue(true);
    }
  }

}
