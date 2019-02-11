import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tercera',
  templateUrl: './tercera.page.html',
  styleUrls: ['./tercera.page.scss'],
})
export class TerceraPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  BackHome(){
  this.router.navigate(['/home']);
  }

}
