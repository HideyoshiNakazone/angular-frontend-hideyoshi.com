import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderSliderComponent } from './header/header-slider/header-slider.component';
import { HeaderComponent } from './header/header.component';
import { HeaderModule } from './header/header.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AppRouterModule } from './app-router.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        HeaderModule,
        AppRouterModule,
        SharedModule,
        FontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
