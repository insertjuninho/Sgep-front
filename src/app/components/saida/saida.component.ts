import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
}
