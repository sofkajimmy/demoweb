import { Component } from '@angular/core';
import { SaludoService } from '../app/saludo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proteccion';
  resultado:string;
  constructor(private service:SaludoService){}
  saludo(){
    this.service.saludar().subscribe(
      data=>{
        this.resultado=data+'';
      },
      err => {
        console.log(err);
      }
    );
  }
}
