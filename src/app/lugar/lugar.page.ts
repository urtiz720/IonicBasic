import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.page.html',
  styleUrls: ['./lugar.page.scss'],
})
export class LugarPage implements OnInit {
nombreLugar:string = ' ';
  constructor(private activatedRoute : ActivatedRoute,
              private navController : NavController,
              private router : Router) { 
    this.activatedRoute.params.subscribe(params => {
      this.nombreLugar = params['nombre'];
    });
  } 

  NavegarBack(){
    this.navController.pop();
  }

  Navegar(){
    this.router.navigate(['/tercera']);
    }

  ngOnInit() {
  }

}
