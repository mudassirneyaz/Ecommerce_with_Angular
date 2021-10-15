import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBodyComponent } from './home-body/home-body.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';

const routes: Routes = [
  {
    path: '', component: HomeBodyComponent
  },
  {
    path: 'product-description/:id', component: ProductDescriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
