import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDrawerComponent } from './custom-drawer.component';

describe('CustomDrawerComponent', () => {
  let component: CustomDrawerComponent;
  let fixture: ComponentFixture<CustomDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
