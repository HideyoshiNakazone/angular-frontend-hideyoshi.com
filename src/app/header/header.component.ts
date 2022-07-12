import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    userIcon = faUser;

    profileDropdownState: boolean = false;

    navSliderStatus: boolean = false;
    userSliderStatus: boolean = false;

    constructor() { }

    public toogleProfileDropdown(): void {
        this.profileDropdownState = !this.profileDropdownState;
    }

    public toogleNavSlider(): void {
        if (this.userSliderStatus) {
            this.userSliderStatus = false;
        } else {
            if (this.navSliderStatus) {
                this.navSliderStatus = false;
            } else {
                this.navSliderStatus = true;
            }
        }
    }

    public profileButtonClicked(): void {
        this.userSliderStatus = true;
    }

    public closeDropdown(): void {
        this.profileDropdownState = false;
    }

    public closeNavSlider(): void {
        if (this.userSliderStatus) {
            this.userSliderStatus = false;
        } else {
            this.navSliderStatus = false;   
        }
    }

}
