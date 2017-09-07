
export class NavBaseObject {
  public constructor (readonly label: string) {}

}
export class NavEntry extends NavBaseObject{

  public constructor(label: string,
                     readonly url: string,
                     readonly entries: NavEntry[]= []) {
      super(label);

  }


  pushEntry(entry: NavEntry): NavEntry {

    this.entries.push(entry);
    return this;

  }

}

export class NavSeparator extends NavBaseObject {
  public constructor() {
    super ('');
  }
}

export class NavTitle extends NavBaseObject {
  public constructor(label: string){
    super(label);
  }
}



export class NavConfig {

    readonly entries: NavEntry[] = [];

    public constructor(readonly showNav: boolean) {

    }


  pushEntry(entry: NavEntry): NavConfig {

      this.entries.push(entry);
      return this;

    }
}


