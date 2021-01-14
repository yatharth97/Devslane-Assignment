import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-nav-container',
  templateUrl: './side-nav-container.component.html',
  styleUrls: ['./side-nav-container.component.css']
})

export class SideNavContainerComponentComponent implements OnInit {
  isExpanded= false;
  constructor() {
  }

  ngOnInit() {
  }
}
