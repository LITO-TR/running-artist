import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {MatPaginatorModule} from "@angular/material/paginator";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {AppRoutingModule} from "./app-routing.module";
import {MatSortModule} from "@angular/material/sort";
import { OffersComponent } from './offers/pages/offers/offers.component';
import {OffersService} from "./offers/service/offers.service";
import { CurrentOffersComponent } from './current-offers/pages/current-offers/current-offers.component';
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    AppComponent,
    OffersComponent,
    CurrentOffersComponent

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatButtonModule,
        RouterModule,
        MatPaginatorModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatIconModule,
        MatSortModule,
        MatCardModule
    ],
  providers: [OffersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
