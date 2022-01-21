import { Component, Input, OnInit } from '@angular/core';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  title: string;
  isActive = false;
  pathName: string;
  @Input() public breadName: string;
  @Input() public id: string;
  constructor(private serverService: ServerService) {}

  ngOnInit(): void {
    this.title = this.serverService.getData(this.id)[0].title;
    if (location.pathname.split('/').slice(-1)[0] === 'update') {
      this.isActive = true;
      this.pathName = location.pathname.split('update')[0] + 'details';
    }
  }
}
