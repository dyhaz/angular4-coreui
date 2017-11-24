import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DropdownsComponent } from './dropdowns.component';

const routes: Routes = [
  {
    path: '',
    component: DropdownsComponent,
    data: {
      title: 'Dropdown'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DropdownsRoutingModule {}
