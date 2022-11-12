import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {routingComponents, RoutingModule} from "./routing/routing.module";
import {HttpClientModule} from "@angular/common/http";
import { CertificateComponent } from './routing/certificate/certificate.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CertificateComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
