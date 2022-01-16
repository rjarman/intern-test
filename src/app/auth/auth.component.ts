import {
  AfterViewInit,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AuthComponent implements OnInit, AfterViewInit {
  isClicked = false;
  isValidPass = true;
  loginForm: FormGroup;
  forgetForm: FormGroup;
  private passElement: HTMLInputElement;
  progressBarValid = false;

  constructor(
    private serverService: ServerService,
    private formBuilder: FormBuilder,
    private location: Location,
    private titleService: Title
  ) {
    this.titleService.setTitle('ACP | Login');
    this.serverService.isServerSentData.subscribe((status) => {
      if (status) {
        this.progressBarValid = true;
      }
    });
  }

  ngAfterViewInit(): void {
    this.passElement = document.getElementById('password') as HTMLInputElement;
    document.getElementById('showPass').addEventListener('click', () => {
      this.passElement.type =
        this.passElement.type === 'password' ? 'text' : 'password';
    });
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.forgetForm = this.formBuilder.group({
      fgt_email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      captcha: ['', Validators.required],
    });
  }

  forget(): void {
    this.serverService.forget(this.forgetForm);
  }

  login(): void {
    this.isValidPass = this.serverService.login(this.loginForm);
  }

  toggleForm(): void {
    if (this.isClicked) {
      this.isClicked = false;
      this.location.replaceState('/login');
      this.titleService.setTitle('ACP | Login');
    } else {
      this.isClicked = true;
      this.location.replaceState('/login/forgot-password');
      this.titleService.setTitle('ACP | Login > Forgot-Password');
    }
  }
}
