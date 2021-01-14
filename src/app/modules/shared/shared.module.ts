import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { ScrollMoreDirective } from "./directives/scroll-more.directive";

@NgModule({
    declarations: [
        ScrollMoreDirective
    ],
    imports:[
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule
    ],
    exports: [
        ScrollMoreDirective,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule
    ]
})
export class SharedModule {}