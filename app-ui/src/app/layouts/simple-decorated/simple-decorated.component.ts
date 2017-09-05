import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-simple',
  templateUrl: './simple-decorated.component.html'
})
export class SimpleDecoratedComponent implements OnInit {

  public disabled = false;
  public status: {isopen: boolean} = {isopen: false};

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {}
}


