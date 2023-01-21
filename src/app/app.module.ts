import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { GridProductsComponent } from './components/grid-products/grid-products.component';
import { HomeComponent } from './pages/home/home.component';
import { HandleHttpErrorService } from './services/handle-http-error.service';
import { ProductService } from './services/Product.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormProductComponent,
    GridProductsComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(
      [{ path: "", component: HomeComponent, pathMatch: "full" }],
      { relativeLinkResolution: "legacy" }
    ),
    AppRoutingModule,
  ],
  providers: [ProductService, HandleHttpErrorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
