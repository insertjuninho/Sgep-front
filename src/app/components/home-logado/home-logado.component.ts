import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'home-logado',
  templateUrl: './home-logado.component.html',
  styleUrls: ['./home-logado.component.scss']
})
export class HomeLogadoComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
}
