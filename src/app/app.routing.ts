import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: 'home',
  component: HomeComponent,

},


{
path: 'about',
loadChildren: () => import('./about/about.module')
  .then(mod => mod.AboutModule)
},

{
path: 'contact',
loadChildren: () => import('./contact/contact.module')
  .then(mod => mod.ContactModule)
},
{
path: 'eziservices',
loadChildren: () => import('./eziservices/eziservices.module')
  .then(mod => mod.EziservicesModule)
},
{
path: 'whyezicodes',
loadChildren: () => import('./whyezicodes/whyezicodes.module')
  .then(mod => mod.WhyezicodesModule)
},


{ path: '**', component: ErrorPageComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
      useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
