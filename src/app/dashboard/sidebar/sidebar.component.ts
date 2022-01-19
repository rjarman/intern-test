import { Component, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutComponent } from '../about/about.component';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements AfterViewInit {
  private container1: HTMLElement;
  private mainBody: HTMLElement;
  private isMenuClicked = false;

  static expandSide(): void {
    const navLower = document.getElementsByClassName(
      'nav-lower'
    )[0] as HTMLElement;

    const navUpper = document.getElementsByClassName(
      'nav-upper'
    )[0] as HTMLElement;
    const container1 = document.getElementsByClassName(
      'container1'
    )[0] as HTMLElement;
    navLower.classList.remove('sm');
    navUpper.classList.remove('sm');
    container1.classList.remove('sm');
  }

  static shrinkSide(): void {
    const navLower = document.getElementsByClassName(
      'nav-lower'
    )[0] as HTMLElement;

    const navUpper = document.getElementsByClassName(
      'nav-upper'
    )[0] as HTMLElement;
    const container1 = document.getElementsByClassName(
      'container1'
    )[0] as HTMLElement;
    navLower.classList.add('sm');
    navUpper.classList.add('sm');
    container1.classList.add('sm');
  }

  constructor(
    private dialog: MatDialog,
    private serverService: ServerService
  ) {}

  ngAfterViewInit(): void {
    this.container1 = document.getElementsByClassName(
      'container1'
    )[0] as HTMLElement;
    this.mainBody = document.getElementsByClassName(
      'main-body'
    )[0] as HTMLElement;
  }

  private addListeners(): void {
    this.container1.addEventListener(
      'mouseover',
      SidebarComponent.expandSide,
      true
    );
    this.container1.addEventListener(
      'mouseleave',
      SidebarComponent.shrinkSide,
      true
    );
  }

  private removeListeners(): void {
    this.container1.removeEventListener(
      'mouseover',
      SidebarComponent.expandSide,
      true
    );
    this.container1.removeEventListener(
      'mouseleave',
      SidebarComponent.shrinkSide,
      true
    );
  }

  activeMenu(): void {
    this.isMenuClicked = this.isMenuClicked ? false : true;
    if (this.isMenuClicked) {
      SidebarComponent.shrinkSide();
      this.mainBody.classList.remove('sm');
      this.addListeners();
    } else {
      this.removeListeners();
      SidebarComponent.expandSide();
      this.mainBody.classList.add('sm');
    }
  }

  openDialog(): void {
    this.dialog.open(AboutComponent, {
      width: '720px',
    });
  }

  logout(): void {
    this.serverService.logout();
  }
}
