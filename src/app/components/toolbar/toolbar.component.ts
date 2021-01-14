import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {
    @Output() sideNavToggle = new EventEmitter();
    menuClicked() {
        this.sideNavToggle.emit();
    }
}