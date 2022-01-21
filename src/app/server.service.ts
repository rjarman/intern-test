import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';
import { FORM_CRED, DATABASE } from './config';
import {
  MultipleChoice,
  LinearScale,
  Checkbox,
  ShortText,
  FileUpload,
  Database,
} from './type';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  isServerSentData = new Subject<boolean>();

  constructor(private router: Router, private cookieService: CookieService) {
    if (!localStorage.getItem('data')) {
      localStorage.setItem('data', JSON.stringify({ data: [] }));
    }
  }

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
      this.isServerSentData.next(true);
      setTimeout(() => {
        this.router.navigateByUrl('/');
      }, 1000);
      setTimeout(() => {
        location.reload();
      }, 1100);
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.cookieService.deleteAll();
    setTimeout(() => {
      this.router.navigateByUrl('/login');
    }, 100);
    setTimeout(() => {
      location.reload();
    }, 200);
  }

  fetch(
    isLocal: boolean = false
  ): Database<
    MultipleChoice | LinearScale | Checkbox | ShortText | FileUpload
  >[] {
    if (isLocal) {
      return DATABASE;
    }
    return JSON.parse(localStorage.getItem('data')).data;
  }

  save(
    database: Database<
      MultipleChoice | LinearScale | Checkbox | ShortText | FileUpload
    >
  ): void {
    const data = JSON.parse(localStorage.getItem('data'));
    data.data.push(database);
    localStorage.setItem('data', JSON.stringify(data));
    this.router.navigateByUrl('/question-builder');
  }

  update(
    database: Database<
      MultipleChoice | LinearScale | Checkbox | ShortText | FileUpload
    >
  ): void {
    const data = JSON.parse(localStorage.getItem('data'));
    data.data.forEach((d, idx) => {
      if (d.id === database.id) {
        data.data[idx] = database;
      }
    });
    localStorage.setItem('data', JSON.stringify(data));
    this.router.navigateByUrl(`/question-builder/${database.id}/details`);
  }

  getData(
    id?: string
  ):
    | Database<
        MultipleChoice | LinearScale | Checkbox | ShortText | FileUpload
      >[]
    | any {
    if (id) {
      for (const data of JSON.parse(localStorage.getItem('data')).data) {
        if (data.id === id) {
          return [data];
        }
      }
    }
    return JSON.parse(localStorage.getItem('data')).data;
  }
}
