import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FriendListComponent} from './friend-list/friend-list.component';

import {HttpMethodsService} from './service/http-method.service';

@NgModule({
  declarations: [
    AppComponent,
    FriendListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [HttpMethodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
