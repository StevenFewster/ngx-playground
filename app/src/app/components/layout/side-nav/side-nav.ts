import { Component, input, InputSignal } from '@angular/core';
import { NavItem } from '../../../models/navigation';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  imports: [RouterLink],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.css',
})
export class SideNav {
  public isRightNav: InputSignal<boolean> = input(false);
  public navItems: InputSignal<NavItem[]> = input<NavItem[]>([]);
}
