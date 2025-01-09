import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from "./componets/test/test.component";
import { UserComponent } from './componets/user/user.component';

@Component({
  selector: 'app-root',
  imports: [ TestComponent,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular19NewFeature';
}
