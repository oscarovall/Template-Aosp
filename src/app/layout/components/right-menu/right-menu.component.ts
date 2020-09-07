import { Component, OnInit, HostBinding, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IOption } from '../../../ui/interfaces/option';
import { ISettings } from '../../../interfaces/settings';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.scss']
})
export class RightMenuComponent implements OnInit {
  @HostBinding('class.settings-panel') true;
  @HostBinding('style.right')

  get getOffset() {
    return this.offset + 'px';
  }

  offset: number;
  layouts: IOption[];
  layoutOptions: IOption[];
  menuOptions: IOption[];
  verticalNavOptions: IOption[];
  horizontalNavOptions: IOption[];
  periodArray: string[];
  selectedWidth: boolean;
  selectedLayout: string;
  selectedNavStyle: string;
  selectedVerticalNavStyle: string;

  @HostListener('document:click', ['$event'])
  public onClick(event: any) {
    console.log('Opening Menu2');
    if (this.offset >= 0) {
      if (!this.element.nativeElement.contains(event.target)) {
        console.log(event);
        if (event && event.target.id !== this.usr.buttonIdPermission) {
          // this.offset = -this.element.nativeElement.offsetWidth;
        }
      }
    }
  }

  constructor(private element: ElementRef, private store: Store<ISettings>, private router: Router, public usr: UserService) {
    this.usr.openRightMenuChange.subscribe((event) => {
      this.setRightOffset();
    });
  }

  setRightOffset(): void {
    console.log('Opening Menu:', this.usr.contentRightMenu);
    if (this.offset === 0) {
      this.offset = -this.element.nativeElement.offsetWidth;
    } else {
      this.offset = 0;
    }
  }

  ngOnInit() {
  }
}
