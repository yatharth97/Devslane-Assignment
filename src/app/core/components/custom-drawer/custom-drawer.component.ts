import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'custom-drawer',
  templateUrl: './custom-drawer.component.html',
  styleUrls: ['./custom-drawer.component.css']
})
export class CustomDrawerComponent implements OnInit {

  @Input() title = '';
  @Input() icon = '';
  @Input() hasBackDrop: boolean = true;
  @Input() mode="over";
  @Input() position="start";
  @Output() openChanged = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  openStateChanged(val) {
    this.openChanged.emit(val);
  }

}
