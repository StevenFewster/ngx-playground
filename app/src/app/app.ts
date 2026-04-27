import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Layout } from './components/layout/layout';

@Component({
  imports: [RouterModule, Layout],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
