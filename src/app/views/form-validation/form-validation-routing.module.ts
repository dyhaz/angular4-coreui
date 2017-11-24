import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormValidationComponent } from './form-validation.component';

const routes: Routes = [
  {
    path: '',
    component: FormValidationComponent,
    data: {
      title: 'Form Validations'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormValidationRoutingModule {}
