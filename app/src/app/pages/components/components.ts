import { Component } from '@angular/core';
import { SideNav } from '../../components/layout/side-nav/side-nav';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import {
  MatButton,
  MatFabButton,
  MatIconButton,
  MatMiniFabButton,
} from '@angular/material/button';
import {
  MatFormFieldModule,
  MatHint,
  MatLabel,
} from '@angular/material/form-field';
import { MatAutocomplete } from '@angular/material/autocomplete';
import {
  MatButtonToggle,
  MatButtonToggleGroup,
} from '@angular/material/button-toggle';
import {
  MatPseudoCheckbox,
  provideNativeDateAdapter,
} from '@angular/material/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatCheckbox } from '@angular/material/checkbox';
import {
  MatChip,
  MatChipListbox,
  MatChipOption,
  MatChipSet,
} from '@angular/material/chips';
import {
  MatDatepicker,
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker,
} from '@angular/material/datepicker';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
} from '@angular/material/sidenav';
import {
  MatSliderModule,
  MatSliderVisualThumb,
} from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { NavItemsComponents } from '../../constants/nav-items-components';
import { NavItem } from '../../models/navigation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-components',
  imports: [
    SideNav,
    MatDivider,
    MatIcon,
    MatIconButton,
    MatButton,
    MatFabButton,
    MatMiniFabButton,
    MatFormFieldModule,
    MatLabel,
    MatAutocomplete,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatPseudoCheckbox,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    MatCheckbox,
    MatChipSet,
    MatChip,
    MatChipListbox,
    MatChipOption,
    MatDatepicker,
    MatDatepickerToggle,
    MatHint,
    MatDateRangeInput,
    MatDateRangePicker,
    MatAccordion,
    MatExpansionModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatDrawer,
    MatDrawerContainer,
    MatDrawerContent,
    MatSliderModule,
    MatSlideToggleModule,
    MatSliderVisualThumb,
    MatStepperModule,
    MatGridListModule,
    RouterModule,
  ],
  templateUrl: './components.html',
  styleUrl: './components.scss',
  providers: [provideNativeDateAdapter()],
})
export class Components {
  public componentNavItems: NavItem[] = NavItemsComponents;
}
