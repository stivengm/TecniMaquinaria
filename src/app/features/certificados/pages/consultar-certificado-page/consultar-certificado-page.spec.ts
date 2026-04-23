import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCertificadoPage } from './consultar-certificado-page';

describe('ConsultarCertificadoPage', () => {
  let component: ConsultarCertificadoPage;
  let fixture: ComponentFixture<ConsultarCertificadoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarCertificadoPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarCertificadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
