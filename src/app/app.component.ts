import { Component } from '@angular/core';

enum affixNames {
    BARRIER,
    MOTES,
    SOAKS,
    KICK
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  public affixes = [
    { type: 'Barrier', url: 'https://www.wowhead.com/spell=372418/fated-power-protoform-barrier' },
    { type: 'Motes', url: 'https://www.wowhead.com/spell=372642/fated-power-chaotic-essence' },
    { type: 'Soaks', url: 'https://www.wowhead.com/spell=372647/fated-power-creation-spark' },
    { type: 'Kick', url: 'https://www.wowhead.com/spell=372419/fated-power-reconfiguration-emitter' },
  ];

  public startDate = '2022-10-25';
  public currentDate: any;
  public region = 'EU';
  public id = 0;

  public cnBosses = [
    { label: 'Shriekwing', affix1: affixNames.KICK+3, affix2: affixNames.BARRIER+3},
    { label: 'Huntsman Altimor', affix1: affixNames.BARRIER+3, affix2: affixNames.MOTES+3},
    { label: 'Hungering Destroyer', affix1: affixNames.MOTES+3, affix2: affixNames.KICK+3},
    { label: 'Lady Inerva Darkvein', affix1: affixNames.KICK+3, affix2: affixNames.MOTES+3},
    { label: 'Sun King\'s Salvation', affix1: affixNames.MOTES+3, affix2: affixNames.SOAKS+3},
    { label: 'Artificer Xy\'mox', affix1: affixNames.SOAKS+3, affix2: affixNames.KICK+3},
    { label: 'Council of Blood', affix1: affixNames.BARRIER+3, affix2: affixNames.SOAKS+3},
    { label: 'Sludgefist', affix1: affixNames.SOAKS+3, affix2: affixNames.BARRIER+3},
    { label: 'Stone Legion Generals', affix1: affixNames.KICK+3, affix2: affixNames.SOAKS+3},
    { label: 'Sire Denathrius', affix1: affixNames.BARRIER+3, affix2: affixNames.KICK+3},
  ];
  public sodBosses = [
    { label: 'Tarragrue', affix1: affixNames.MOTES+2, affix2: affixNames.SOAKS+2},
    { label: 'Eye of the Jailer', affix1: affixNames.SOAKS+2, affix2: affixNames.KICK+2},
    { label: 'The Nine', affix1: affixNames.KICK+2, affix2: affixNames.BARRIER+2},
    { label: 'Remnant of Ner\'zhul', affix1: affixNames.BARRIER+2, affix2: affixNames.MOTES+2},
    { label: 'Soulrender Dormazain', affix1: affixNames.MOTES+2, affix2: affixNames.KICK+2},
    { label: 'Painsmith Raznal', affix1: affixNames.BARRIER+2, affix2: affixNames.SOAKS+2},
    { label: 'Guardian of the First Ones', affix1: affixNames.KICK+2, affix2: affixNames.SOAKS+2},
    { label: 'Fatescribe Roh\'kalo', affix1: affixNames.BARRIER+2, affix2: affixNames.SOAKS+2},
    { label: 'Kel\'thuzad', affix1: affixNames.MOTES+2, affix2: affixNames.BARRIER+2},
    { label: 'Sylvanas Windrunner', affix1: affixNames.SOAKS+2, affix2: affixNames.MOTES+2},
  ];
  public sofoBosses = [
    { label: 'Vigilant Guardian', affix1: affixNames.KICK+1, affix2: affixNames.BARRIER+1},
    { label: 'Skolex', affix1: affixNames.BARRIER+1, affix2: affixNames.MOTES+1},
    { label: 'Artificer Xy\'mox', affix1: affixNames.MOTES+1, affix2: affixNames.SOAKS+1},
    { label: 'Halondrus', affix1: affixNames.SOAKS+1, affix2: affixNames.KICK+1},
    { label: 'Dausegne', affix1: affixNames.MOTES+1, affix2: affixNames.KICK+1},
    { label: 'Prototype Pantheon', affix1: affixNames.BARRIER+1, affix2: affixNames.SOAKS+1},
    { label: 'Lihuvim', affix1: affixNames.KICK+1, affix2: affixNames.MOTES+1},
    { label: 'Anduin Wrynn', affix1: affixNames.BARRIER+1, affix2: affixNames.KICK+1},
    { label: 'Lords of Dread', affix1: affixNames.MOTES+1, affix2: affixNames.BARRIER+1},
    { label: 'Rygelon', affix1: affixNames.SOAKS+1, affix2: affixNames.BARRIER+1},
    { label: 'The Jailer', affix1: affixNames.KICK+1, affix2: affixNames.SOAKS+1},
  ];

  constructor() {
    this.changeId(new Date());
  }

  public changeId(date: any = null) {
    if (date) {
      this.currentDate = date;
    }
    if (!this.currentDate) {
      this.currentDate = new Date();
    }
    this.currentDate.setHours(0,0,0,0);
    const startDate = new Date(this.startDate);
    startDate.setHours(0,0,0,0);
    const difference = this.currentDate.getTime() - startDate.getTime();
    let differenceInDays = Math.floor(difference / (1000 * 3600 * 24));
    if (this.region === 'EU') {
      differenceInDays -= 1;
    }
    this.id = Math.floor(differenceInDays / 7);
  }

  public calcCurAffix(affix: number) {
    let curAffix = (affix+this.id)%4;
    if (curAffix < 0) {
      curAffix = 3+curAffix;
    }
    return curAffix;
  }
}
