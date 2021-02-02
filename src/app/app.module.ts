import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HelperService } from './services/helper.service';
import { WebsiteComponent } from './website/website.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    WebsiteComponent,
    AdminComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    SlickCarouselModule,
    BrowserAnimationsModule
  ],
  providers: [ HelperService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
