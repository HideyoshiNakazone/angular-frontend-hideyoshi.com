import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HeaderComponent } from './header.component';
import { HeaderSliderComponent } from './header-slider/header-slider.component';
import { NavSliderComponent } from './header-slider/nav-slider/nav-slider.component';
import { UserSliderComponent } from './header-slider/user-slider/user-slider.component';
import { HeaderDropdownComponent } from './header-dropdown/header-dropdown.component';
import { SharedModule } from '../shared/shared.module';
import { AppRouterModule } from '../app-router.module';



@NgModule({
    declarations: [
        HeaderComponent,
        HeaderSliderComponent,
        NavSliderComponent,
        UserSliderComponent,
        HeaderDropdownComponent
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        AppRouterModule,
        SharedModule
    ], exports: [
        HeaderComponent,
        HeaderSliderComponent,
        NavSliderComponent,
        UserSliderComponent
    ]
})
export class HeaderModule { }
