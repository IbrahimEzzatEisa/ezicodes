import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  EziservicesRoutingModule } from './eziservices-routing.module';
import { ConsultationComponent } from './consultation/consultation.component';
import { CustomerCareComponent } from './customer-care/customer-care.component';
import { DigitalSolutionsAndInnovationsKeyServicesComponent } from './digital-solutions-and-innovations-key-services/digital-solutions-and-innovations-key-services.component';
import { EndToEndSolutionsComponent } from './end-to-end-solutions/end-to-end-solutions.component';
import { SectionsModule } from '../sections/sections.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';

@NgModule({
  imports: [
    CommonModule,
    EziservicesRoutingModule,
    SectionsModule,
    NgbModule,
    RouterModule,
    NouisliderModule,
    JwBootstrapSwitchNg2Module
  ],
  exports: [
    
    ConsultationComponent,
    CustomerCareComponent,
    DigitalSolutionsAndInnovationsKeyServicesComponent,
    EndToEndSolutionsComponent

  ],
  declarations: [
    ConsultationComponent,
    CustomerCareComponent,
    DigitalSolutionsAndInnovationsKeyServicesComponent,
    EndToEndSolutionsComponent
  ],
  providers: [
  ],
})
export class EziservicesModule { }