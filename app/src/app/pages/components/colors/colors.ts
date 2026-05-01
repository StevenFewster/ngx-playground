import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-colors',
  imports: [MatGridListModule, MatIconModule],
  templateUrl: './colors.html',
  styleUrl: './colors.css',
})
export class Colors {}
