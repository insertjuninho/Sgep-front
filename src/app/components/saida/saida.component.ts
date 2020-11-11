import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-saida',
  templateUrl: './saida.component.html',
  styleUrls: ['./saida.component.scss']
})
export class SaidaComponent implements OnInit {

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
      hrSaida: ['', Validators.required],
      dataSaida: ['', Validators.required],
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
