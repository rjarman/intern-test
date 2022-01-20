import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

interface BreadPathMap {
  [name: string]: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit, AfterViewInit {
  lastBread: string;
  breadPathMap: BreadPathMap;
  @Input() public breadName: string[];
  constructor() {
    this.breadPathMap = {
      Form: '/question-builder',
    };
  }

  ngOnInit(): void {
    this.lastBread = this.breadName.pop();
  }

  ngAfterViewInit(): void {}
}
