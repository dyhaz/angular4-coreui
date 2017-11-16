import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AnimationsComponent } from './animations.component';
import { AnimationsRoutingModule } from './animations-routing.module';

@NgModule({
  imports: [
    AnimationsRoutingModule,
    ChartsModule,
    BsDropdownModule,
  ],
  declarations: [ AnimationsComponent ]
})
export class AnimationsModule { }
