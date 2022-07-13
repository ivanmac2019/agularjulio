import { Component,OnInit } from '@angular/core';
import { PersonasService } from './personas/personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'Personas';
  personas:any;

  constructor(public persona:PersonasService){}

  ngOnInit()
  {
    this.persona.getPersonas().subscribe
    (
        (r) => { this.personas = r; console.log(r) },
        (e) => { console.error(e) }
    )
  }
}
