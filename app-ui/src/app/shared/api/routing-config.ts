
export abstract class NavBaseObject {
  public constructor (readonly label: string, readonly url: string) {}
  public abstract isType(type: string): boolean;

}
export class NavEntry extends NavBaseObject {

  public badges: NavBadge[] = [];

  public constructor(label: string, url: string, readonly icon: string = '',
                     readonly entries: NavEntry[]= []) {
      super(label, url);

  }

  public isType(type: string): boolean {
    return type.toLowerCase() === 'entry';
  }

  pushEntry(entry: NavEntry): NavEntry {

    this.entries.push(entry);
    return this;

  }

  public addBadge(type: string, label: string) {
    this.badges.push(new NavBadge(type, label));
    return this;
  }

  get hasEntries(): boolean {
    return this.entries.length > 0;
  }
}

export class NavSeparator extends NavBaseObject {
  public constructor() {
    super ('', '');
  }

  public isType(type: string): boolean {
    return type.toLowerCase() === 'separator';
  }

}

class NavBadge {
  constructor(readonly type: string, readonly label: string) {

  }
}

export class NavTitle extends NavBaseObject {
  public badges: NavBadge[] = [];
  public constructor(label: string, url: string = '', readonly icon: string = '') {
    super(label, url );
  }

  public isType(type: string): boolean {
    return type.toLowerCase() === 'title';
  }

  public addBadge(type: string, label: string) {
    this.badges.push(new NavBadge(type, label));
    return this;
  }

}



export class NavConfig {

    readonly entries: NavBaseObject[] = [];

    public constructor(readonly showNav: boolean) {

    }


  pushEntry(entry: NavBaseObject): NavConfig {

      this.entries.push(entry);
      return this;

    }
}


