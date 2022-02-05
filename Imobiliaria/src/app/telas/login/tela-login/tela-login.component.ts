import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  logar(){
    
    this.router.navigate(['/tela-principal'])
  }
  ngOnInit(): void {
  }
  
}
