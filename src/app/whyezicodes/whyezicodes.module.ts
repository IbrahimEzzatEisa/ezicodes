import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhyezicodesRoutingModule } from './whyezicodes-routing.module';
import { WhyezicodesComponent } from './whyezicodes.component';

@NgModule({
  imports: [
    CommonModule,
    WhyezicodesRoutingModule
  ],
  exports: [
    WhyezicodesComponent
  ],
  declarations: [
    WhyezicodesComponent
  ],
  providers: [
  ],
})
export class WhyezicodesModule { }