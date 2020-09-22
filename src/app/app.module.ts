import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { SectionsModule } from './sections/sections.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './home/home.module';
import { FacebookModule } from 'ngx-fb';





@NgModule({

  declarations: [
    AppComponent,
    
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule, 
    NgbModule,
    FormsModule,
    HomeModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    FacebookModule.forRoot(),
    



  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
