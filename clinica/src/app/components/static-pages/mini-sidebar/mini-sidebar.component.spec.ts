import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniSidebarComponent } from './mini-sidebar.component';

describe('MiniSidebarComponent', () => {
  let component: MiniSidebarComponent;
  let fixture: ComponentFixture<MiniSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiniSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
