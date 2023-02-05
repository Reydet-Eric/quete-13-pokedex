import { Component } from '@angular/core';
import { PokedexService } from 'src/app/shared/pokedex.service';

@Component({
  selector: 'app-pockedex-page',
  templateUrl: './pockedex-page.component.html',
  styleUrls: ['./pockedex-page.component.css']
})
export class PockedexPageComponent {

  constructor(public pokedex: PokedexService){}

}
