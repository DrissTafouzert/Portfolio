import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown'
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContentComponent } from './components/content/content.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpClientTestingModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
