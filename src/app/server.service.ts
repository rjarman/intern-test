import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FORM_CRED } from './config';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  constructor(private router: Router, private cookieService: CookieService) {}

  isUserLogin(): boolean {
    if (this.cookieService.get('_isUserLogin') === 'true') {
      return true;
    }
    return false;
  }

  forget(forgetForm: FormGroup): void {
    if (
      forgetForm.value.captcha === FORM_CRED.captcha &&
      forgetForm.value.fgt_email === FORM_CRED.email
    ) {
      location.reload();
    }
  }

  login(loginForm: FormGroup): boolean {
    if (loginForm.value.password === FORM_CRED.password) {
      this.cookieService.deleteAll();
      this.cookieService.set('_isUserLogin', 'true');
      this.cookieService.set('email', loginForm.value.email);
      this.router.navigateByUrl('/');
      return true;
    }
    return false;
  }

  logout(): void {
    this.cookieService.deleteAll();
    this.router.navigateByUrl('/login');
  }
}
