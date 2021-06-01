import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsdataComponent } from './productsdata/productsdata.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from '../service.service';
import { urlServices } from '../serviceUrls';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [

  { path: '', component:LoginComponent },
  { path: 'productsdata', component:ProductsdataComponent },
  { path: 'feedback', component:FeedbackComponent },
]

@NgModule({
  declarations: [LoginComponent, ProductsdataComponent, FeedbackComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    RouterModule.forChild(routes),FormsModule, ReactiveFormsModule,HttpClientModule
  ],
  providers: [ServiceService,urlServices],
})
export class ProductsModule { }
