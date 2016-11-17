/**
 * Created by Muralidharan on 11/10/2016.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { Ng2BootstrapModule } from 'ng2-bootstrap';

//Component
import { HomeComponent } from './Component/HomeComponent';

@NgModule({
    imports:      [ BrowserModule,
                    HttpModule, MaterialModule.forRoot(), Angular2FontawesomeModule,
                    Ng2BootstrapModule
                  ],
    declarations: [ AppComponent, HomeComponent  ],
    bootstrap:    [ AppComponent, HomeComponent ]

})
export class AppModule { }
