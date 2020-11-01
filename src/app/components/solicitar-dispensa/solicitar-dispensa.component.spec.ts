import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarDispensaComponent } from './solicitar-dispensa.component';

describe('SolicitarDispensaComponent', () => {
  let component: SolicitarDispensaComponent;
  let fixture: ComponentFixture<SolicitarDispensaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitarDispensaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarDispensaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
