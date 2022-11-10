import { Component } from '@angular/core';

enum affixNames {
    BARRIER,
    MOTES,
    SOAKS,
    KICK
};

declare var WH: any;

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
  public nrOfAffixes = 3;

  public cnBosses = [
    { label: 'Shriekwing', affix1: affixNames.KICK+3, affix2: affixNames.BARRIER+3, affix3: affixNames.BARRIER, affix4: affixNames.MOTES},
    { label: 'Huntsman Altimor', affix1: affixNames.BARRIER+3, affix2: affixNames.MOTES+3, affix3: affixNames.MOTES, affix4: affixNames.SOAKS},
    { label: 'Hungering Destroyer', affix1: affixNames.MOTES+3, affix2: affixNames.KICK+3, affix3: affixNames.KICK, affix4: affixNames.MOTES},
    { label: 'Lady Inerva Darkvein', affix1: affixNames.KICK+3, affix2: affixNames.MOTES+3, affix3: affixNames.MOTES, affix4: affixNames.KICK},
    { label: 'Sun King\'s Salvation', affix1: affixNames.MOTES+3, affix2: affixNames.SOAKS+3, affix3: affixNames.SOAKS, affix4: affixNames.KICK},
    { label: 'Artificer Xy\'mox', affix1: affixNames.SOAKS+3, affix2: affixNames.KICK+3, affix3: affixNames.KICK, affix4: affixNames.BARRIER},
    { label: 'Council of Blood', affix1: affixNames.BARRIER+3, affix2: affixNames.SOAKS+3, affix3: affixNames.SOAKS, affix4: affixNames.BARRIER},
    { label: 'Sludgefist', affix1: affixNames.SOAKS+3, affix2: affixNames.BARRIER+3, affix3: affixNames.BARRIER, affix4: affixNames.SOAKS},
    { label: 'Stone Legion Generals', affix1: affixNames.KICK+3, affix2: affixNames.SOAKS+3, affix3: affixNames.KICK, affix4: affixNames.BARRIER},
    { label: 'Sire Denathrius', affix1: affixNames.BARRIER+3, affix2: affixNames.KICK+3, affix3: affixNames.BARRIER, affix4: affixNames.MOTES},
  ];
  public sodBosses = [
    { label: 'Tarragrue', affix1: affixNames.MOTES+2, affix2: affixNames.SOAKS+2, affix3: affixNames.MOTES, affix4: affixNames.SOAKS},
    { label: 'Eye of the Jailer', affix1: affixNames.SOAKS+2, affix2: affixNames.KICK+2, affix3: affixNames.SOAKS, affix4: affixNames.KICK},
    { label: 'The Nine', affix1: affixNames.KICK+2, affix2: affixNames.BARRIER+2, affix3: affixNames.KICK, affix4: affixNames.BARRIER},
    { label: 'Remnant of Ner\'zhul', affix1: affixNames.BARRIER+2, affix2: affixNames.MOTES+2, affix3: affixNames.BARRIER, affix4: affixNames.MOTES},
    { label: 'Soulrender Dormazain', affix1: affixNames.MOTES+2, affix2: affixNames.KICK+2, affix3: affixNames.SOAKS, affix4: affixNames.BARRIER},
    { label: 'Painsmith Raznal', affix1: affixNames.BARRIER+2, affix2: affixNames.SOAKS+2, affix3: affixNames.KICK, affix4: affixNames.MOTES},
    { label: 'Guardian of the First Ones', affix1: affixNames.MOTES, affix2: affixNames.KICK, affix3: affixNames.BARRIER, affix4: affixNames.SOAKS},
    { label: 'Fatescribe Roh\'kalo', affix1: affixNames.BARRIER+2, affix2: affixNames.SOAKS+2, affix3: affixNames.MOTES, affix4: affixNames.KICK},
    { label: 'Kel\'thuzad', affix1: affixNames.MOTES+2, affix2: affixNames.BARRIER+2, affix3: affixNames.BARRIER, affix4: affixNames.MOTES},
    { label: 'Sylvanas Windrunner', affix1: affixNames.SOAKS+2, affix2: affixNames.MOTES+2, affix3: affixNames.MOTES, affix4: affixNames.SOAKS},
  ];
  public sofoBosses = [
    { label: 'Vigilant Guardian', affix1: affixNames.KICK+1, affix2: affixNames.BARRIER+1, affix3: affixNames.SOAKS, affix4: affixNames.KICK},
    { label: 'Skolex', affix1: affixNames.BARRIER+1, affix2: affixNames.MOTES+1, affix3: affixNames.KICK, affix4: affixNames.BARRIER},
    { label: 'Artificer Xy\'mox', affix1: affixNames.MOTES+1, affix2: affixNames.SOAKS+1, affix3: affixNames.BARRIER, affix4: affixNames.MOTES},
    { label: 'Halondrus', affix1: affixNames.SOAKS+1, affix2: affixNames.KICK+1, affix3: affixNames.MOTES, affix4: affixNames.SOAKS},
    { label: 'Dausegne', affix1: affixNames.MOTES+1, affix2: affixNames.KICK+1, affix3: affixNames.MOTES, affix4: affixNames.KICK},
    { label: 'Prototype Pantheon', affix1: affixNames.BARRIER+1, affix2: affixNames.SOAKS+1, affix3: affixNames.BARRIER, affix4: affixNames.SOAKS},
    { label: 'Lihuvim', affix1: affixNames.KICK+1, affix2: affixNames.MOTES+1, affix3: affixNames.KICK, affix4: affixNames.MOTES},
    { label: 'Anduin Wrynn', affix1: affixNames.BARRIER+1, affix2: affixNames.KICK+1, affix3: affixNames.SOAKS, affix4: affixNames.KICK},
    { label: 'Lords of Dread', affix1: affixNames.MOTES+1, affix2: affixNames.BARRIER+1, affix3: affixNames.KICK, affix4: affixNames.BARRIER},
    { label: 'Rygelon', affix1: affixNames.SOAKS+1, affix2: affixNames.BARRIER+1, affix3: affixNames.SOAKS, affix4: affixNames.BARRIER},
    { label: 'The Jailer', affix1: affixNames.KICK+1, affix2: affixNames.SOAKS+1, affix3: affixNames.MOTES, affix4: affixNames.SOAKS},
  ];

  constructor() {
    this.changeId(new Date());
  }

  public changeId(date: any = null, forceRefresh = false) {
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
    let refreshTooltips = false;
    if (this.id !== Math.floor(differenceInDays / 7)) {
      refreshTooltips = true;
    }
    this.id = Math.floor(differenceInDays / 7);
    if (refreshTooltips || forceRefresh) {
      setTimeout(() => {
        WH.Tooltips.refreshLinks();
      });
    }
  }

  public calcCurAffix(affix: number) {
    let curAffix = (affix+this.id)%4;
    if (curAffix < 0) {
      curAffix = 4+curAffix;
    }
    return curAffix;
  }
}
