import { Component, OnInit, Input, ElementRef, ViewChild, TemplateRef, Output, EventEmitter, OnChanges } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';


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

verify(){

  if(this.validaFormGroup.valid){
    let hrEntrada
    let dataEntrada
    if (this.validaFormGroup.value['hrEntrada'] && this.validaFormGroup.value['dataEntrada']) {
      hrEntrada = moment(this.validaFormGroup.value['hrEntrada']).format()
      dataEntrada = moment(this.validaFormGroup.value['datdataEntradaeFinal']).format()
    } else {
      dataEntrada = ''
      dataEntrada = ''
    }
  }
  }
}
