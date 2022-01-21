import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from 'src/app/server.service';
import {
  Checkbox,
  Database,
  FileUpload,
  LinearScale,
  MultipleChoice,
  ShortText,
} from 'src/app/type';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: [
    './details.component.scss',
    '../create/create.component.scss',
    '../cards/cards.component.scss',
  ],
})
export class DetailsComponent implements OnInit {
  id: string;
  database: Database<
    MultipleChoice | LinearScale | Checkbox | ShortText | FileUpload
  >[];
  shortTextData: Database<ShortText>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private serverService: ServerService
  ) {
    this.titleService.setTitle('ACP | Form Details');
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.database = this.serverService.getData();
    this.database.forEach((data) => {
      if (data.id === this.id) {
        this.shortTextData = data;
      }
    });
  }
}
