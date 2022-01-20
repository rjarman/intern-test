import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CreateComponent } from './create/create.component';
import { TableComponent } from './table/table.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { AboutComponent } from './about/about.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {
  MatRippleModule,
  MAT_RIPPLE_GLOBAL_OPTIONS,
} from '@angular/material/core';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRippleModule,
  ],
  declarations: [
    CreateComponent,
    TableComponent,
    AboutComponent,
    DetailsComponent,
    UpdateComponent,
    HeaderComponent,
    SidebarComponent,
    CardsComponent,
  ],
  providers: [
    {
      provide: MAT_RIPPLE_GLOBAL_OPTIONS,
      useValue: {
        animation: {
          enterDuration: 250,
          exitDuration: 50,
        },
      },
    },
  ],
})
export class DashboardModule {}
