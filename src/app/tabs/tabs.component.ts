import { Component, OnInit } from '@angular/core';
import {StarWarsService} from '../start-wars.service'; 
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = [];
  choosenList = 'all';
  swService : StarWarsService;

  constructor(swService : StarWarsService) { 
    this.swService=swService;
  }
  
  ngOnInit() {
  }

  onChoose(side) {
    this.choosenList = side;
  }
  getCharacters() {
    
    this.characters=this.swService.getCharacters(this.choosenList);
    return this.characters;
  }
  


}


