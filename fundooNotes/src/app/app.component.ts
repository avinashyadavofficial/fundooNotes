import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LoginComponent, RegistrationComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fundooNotes';
}
