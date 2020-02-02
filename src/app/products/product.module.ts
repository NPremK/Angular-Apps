import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-space-pipe';
import { RouterModule } from '@angular/router';
import {ProductsGuardService} from './products-guard.service';
import { ProductService } from './product.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
      RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id',
      canActivate: [ProductsGuardService],
      component: ProductDetailComponent}
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ],
  providers: [
    ProductService,
    ProductsGuardService
  ]
})
export class ProductModule { }
