import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNaviBarComponent } from './side-navi-bar.component';

describe('SideNaviBarComponent', () => {
  let component: SideNaviBarComponent;
  let fixture: ComponentFixture<SideNaviBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNaviBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNaviBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
