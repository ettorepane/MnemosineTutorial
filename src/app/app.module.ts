import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';

import {MatIconModule} from '@angular/material/icon';

import {MatButtonModule} from '@angular/material/button';
import { HomePageComponent } from './home-page/home-page.component';

import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
