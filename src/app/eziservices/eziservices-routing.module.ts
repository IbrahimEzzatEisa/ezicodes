import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DigitalSolutionsAndInnovationsKeyServicesComponent } from './digital-solutions-and-innovations-key-services/digital-solutions-and-innovations-key-services.component';
import { EndToEndSolutionsComponent } from './end-to-end-solutions/end-to-end-solutions.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { CustomerCareComponent } from './customer-care/customer-care.component';


const routes: Routes = [

  { path: 'digitalsolutionsandinnovationsKeyservices', component: DigitalSolutionsAndInnovationsKeyServicesComponent },
  { path: 'endtoendsolutions', component: EndToEndSolutionsComponent },
  { path: 'consultation', component: ConsultationComponent },
  { path: 'customercare', component: CustomerCareComponent },


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EziservicesRoutingModule { }