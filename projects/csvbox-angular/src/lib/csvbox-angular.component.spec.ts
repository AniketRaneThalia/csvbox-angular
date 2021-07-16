import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvboxAngularComponent } from './csvbox-angular.component';

describe('CsvboxAngularComponent', () => {
  let component: CsvboxAngularComponent;
  let fixture: ComponentFixture<CsvboxAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsvboxAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvboxAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
