import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CreateComponent } from './create/create.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  declarations: [CreateComponent, TableComponent],
})
export class DashboardModule {}
