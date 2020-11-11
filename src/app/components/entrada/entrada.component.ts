import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.scss'],

})
export class EntradaComponent implements OnInit {
  public validaFormGroup: FormGroup;
  
  constructor(
    public router: Router,
    private sgep: FormBuilder,
  ) { }

  ngOnInit() {
    this.validaForm()
  }

  validaForm (){
    this.validaFormGroup = this.sgep.group({
      hrEntrada: ['', Validators.required],
      dataEntrada: ['', Validators.required],
      obs: ['', Validators.required]
    })
  }
}
