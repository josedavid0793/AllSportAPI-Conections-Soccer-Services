import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  ingreso:number=0;
  porcentaje:number=0;
  cantidad : number=0;
  plazo : number=0;
  interes:number=0;
  resultado:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  calcular():void{

    if (this.ingreso <= 1500000) {
      this.porcentaje=this.ingreso*0.05;
      this.resultado=this.porcentaje;
      this.interes=this.resultado*0.80;
    }else if (this.ingreso > 1500000) {
      this.porcentaje=this.ingreso*0.10;
      this.resultado=this.porcentaje;
      this.interes=this.resultado*0.3;
    }else if (this.ingreso < 500000) {
      alert("Sus ingresos no son los adecuados para jugar.");
      return;
    }
  }
   visibilidad(selector: any, visible: any):void {
    var elemento = document.querySelector(selector);
    if (elemento != null) {
      elemento.style.display = visible?'block':'none';
    }
  }

}
