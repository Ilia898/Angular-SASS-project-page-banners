/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CropperTestComponent } from './cropper-test.component';

describe('CropperTestComponent', () => {
  let component: CropperTestComponent;
  let fixture: ComponentFixture<CropperTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropperTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropperTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
