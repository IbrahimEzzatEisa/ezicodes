import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavComponent } from './nav';






const COMPONENTS = [
   FooterComponent,
   NavbarComponent ,
   NavComponent

]


@NgModule({
  declarations: [
    ...COMPONENTS,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ...COMPONENTS,
  ],
  providers: [ ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
      return <ModuleWithProviders> {
          ngModule: SharedModule,
          providers: [
          ]
      }
  }
}
