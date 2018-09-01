import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../start-wars.service';
@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  availableSide = [
    { display: 'None', value: '' },
    { display: 'Light', value: 'light' },
    { display: 'Dark', Value: 'dark' }];

  swService: StarWarsService;
  constructor(swService: StarWarsService) {
    this.swService = swService;
  }
  ngOnInit() {
  }
  onSubmit(submittedForm) {
    if (submittedForm.invalid) { return }
    console.log(submittedForm);
    this.swService.onSubmit(submittedForm);
  }
}
