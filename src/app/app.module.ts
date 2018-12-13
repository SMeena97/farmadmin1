import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlotComponent } from './flot/flot.component';
import { MorrisComponent } from './morris/morris.component';
import { TablesComponent } from './tables/tables.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SidebarComponent,
    DashboardComponent,
    FlotComponent,
    MorrisComponent,
    TablesComponent,
    ProductsComponent,
    OrdersComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
