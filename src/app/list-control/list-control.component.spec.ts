import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListControlComponent } from './list-control.component';

describe('ListControlComponent', () => {
  let component: ListControlComponent;
  let fixture: ComponentFixture<ListControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
