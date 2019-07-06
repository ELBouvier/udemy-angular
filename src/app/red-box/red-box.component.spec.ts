import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedBoxComponent } from './red-box.component';

describe('RedBoxComponent', () => {
  let component: RedBoxComponent;
  let fixture: ComponentFixture<RedBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
