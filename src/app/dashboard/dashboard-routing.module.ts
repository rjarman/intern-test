import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { TableComponent } from './table/table.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: '',
    component: TableComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: ':id/details',
    component: DetailsComponent,
  },
  {
    path: ':id/update',
    component: UpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
