import { Component, OnInit } from '@angular/core';
import { SliderItemComponent } from 'src/app/shared/slider-item/slider-item.component';

@Component({
    selector: 'app-user-slider',
    templateUrl: './user-slider.component.html',
    styleUrls: ['./user-slider.component.css']
})
export class UserSliderComponent extends SliderItemComponent {

    userOptions = [
        {
            name: "Login",
            onClick: () => {
                console.log("login click");
            }
        },
        {
            name: "Signup",
            onClick: () => {
                console.log("signup click");
            }
        }
    ]

    constructor() {
        super();
    }

}
