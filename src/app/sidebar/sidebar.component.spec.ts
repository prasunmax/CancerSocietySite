import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PrasunSidebarComponent} from './sidebar.component';

describe('SidebarComponent', () => {
  let component: PrasunSidebarComponent;
  let fixture: ComponentFixture<PrasunSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrasunSidebarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrasunSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
