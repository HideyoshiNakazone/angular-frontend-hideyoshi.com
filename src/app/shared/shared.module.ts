import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickedOutsideDirective } from './directive/clicked-outside.directive';
import { SliderItemComponent } from './slider-item/slider-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [ 
        ClickedOutsideDirective,
        SliderItemComponent
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule
    ],
    exports: [
        ClickedOutsideDirective,
        SliderItemComponent
    ]
})
export class SharedModule { }
