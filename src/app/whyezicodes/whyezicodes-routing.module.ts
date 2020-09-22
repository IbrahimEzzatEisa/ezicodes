import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhyezicodesComponent } from './whyezicodes.component';


const routes: Routes = [
  { path: '', component: WhyezicodesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhyezicodesRoutingModule { }