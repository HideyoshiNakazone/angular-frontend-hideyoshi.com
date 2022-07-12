import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEdit, faQuestionCircle, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/shared/models/user.model';

@Component({
    selector: 'app-header-dropdown',
    templateUrl: './header-dropdown.component.html',
    styleUrls: ['./header-dropdown.component.css'],
    animations: [
        trigger('dropdownState', [
            state('hide', style({
                'opacity': '0'
            })),
            state('show', style({
                'opacity': '1'
            })),
            transition('hide => show', animate('20ms ease-in')),
            transition('show => hide', animate('5ms ease-out'))
        ])
    ]
})
export class HeaderDropdownComponent {
    
    userIcon = faUser;

    editIcon = faEdit;

    questionCircleIcon = faQuestionCircle;

    signOutAltIcon = faSignOutAlt;

    @Input()
    state: boolean = false;

    @Input()
    ignoreClickOutside!: HTMLDivElement[];

    @Output()
    clickOutside = new EventEmitter();

    public user!: User;

    constructor() { }

    get dropDownState() {
        return this.state ? 'show' : 'hide';
    }

    onClickedOutside() {
        this.clickOutside.emit();
    }

}
