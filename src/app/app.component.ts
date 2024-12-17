import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from './components/table/table.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TableComponent],
  template: `
  <table-component/>
  <router-outlet />`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'carbon-template';
}
