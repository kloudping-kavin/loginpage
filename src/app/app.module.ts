import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "../login/login.component";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { RegisterComponent } from "../register/register.component";
import {AppRoutingModule} from './app-routing.module'
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "@angular/router";
import {RouterModule, Routes} from '@angular/router';
import { FormControl , Validator } from '@angular/forms';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations:[
        AppComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports:[
        BrowserModule,
        FormsModule,
        CommonModule,
        AppRoutingModule,
        ReactiveFormsModule
       
    ],
    providers:[],
    bootstrap:[AppComponent]
})
export class AppModule {}


