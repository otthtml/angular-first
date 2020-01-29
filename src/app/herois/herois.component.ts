import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.scss']
})
export class HeroisComponent implements OnInit {

  heroi: Hero = {
    id: 1,
    name: "Windstorm"
  }

  constructor() {
    
}

  ngOnInit() {
    
  }

}
