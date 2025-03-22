import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule] // Add RouterModule here
})
export class AppComponent {
  title = 'HelloWorldApp';
  logoPath: string  = 'assets/Logo.jpg';
}
