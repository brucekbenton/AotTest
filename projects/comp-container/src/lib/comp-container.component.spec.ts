import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompContainerComponent } from './comp-container.component';

describe('CompContainerComponent', () => {
  let component: CompContainerComponent;
  let fixture: ComponentFixture<CompContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
