import { Component, OnInit,Input,EventEmitter } from '@angular/core';
import {StarWarsService} from '../start-wars.service'; 
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
@Input() character;

swService : StarWarsService; 

constructor(swService : StarWarsService) { 
  this.swService=swService;
}

  ngOnInit() {
  }
  onAssign(side){
    console.log('item');
    this.swService.onSideChoose({name: this.character.name, side:side});
  //   this.character.side=side;
  
  // this.sideAssigned.emit({name: this.character.name, side:side})
}
}
