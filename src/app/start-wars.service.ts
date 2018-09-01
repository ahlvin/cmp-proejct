import { LogService } from './log.service';
import { Injectable } from '@angular/core';
@Injectable()
export class StarWarsService {
  private characters = [
    { name: 'Luke skywalker', side: '' },
    { name: 'Darth Vander', side: '' }
  ];

  private logservice: LogService;
  constructor(logService: LogService) {
    this.logservice = logService;
  }
  getCharacters(choosenList) {
    if (choosenList === 'all') { return this.characters; }
    else {
      return this.characters.filter((char) => {
        return char.side === choosenList;
      })
    }
  }

  onSubmit(submittedvalue) {
    const pos = this.characters.findIndex((char) => {
      return char.name === submittedvalue.value.name
    });
    if (pos !== -1) { return }
    const inputValue = { name: submittedvalue.value.name, side: submittedvalue.value.side }
    this.characters.push(inputValue);

  }
  onSideChoose(charInfo) {
    console.log('testing');
    console.log(charInfo);

    const pos = this.characters.findIndex((i) => {
      return i.name === charInfo.name
    })

    this.characters[pos].side = charInfo.side;
    this.logservice.writeLog('chnaged side of ' + charInfo.side);
  }

}