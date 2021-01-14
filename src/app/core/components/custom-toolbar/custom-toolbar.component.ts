import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'custom-toolbar',
  templateUrl: './custom-toolbar.component.html',
  styleUrls: ['./custom-toolbar.component.css']
})
export class CustomToolbarComponent implements OnInit {

  @Input() titleName;
  @Input() iconName;

  @Output() sideDrawerIconClicked = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit(): void {
  }

  iconClicked() {
    this.sideDrawerIconClicked.emit();
  }
}
