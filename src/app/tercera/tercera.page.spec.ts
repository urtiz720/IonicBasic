import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceraPage } from './tercera.page';

describe('TerceraPage', () => {
  let component: TerceraPage;
  let fixture: ComponentFixture<TerceraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
