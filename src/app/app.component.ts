import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  // standalone: true,
   imports: [RouterModule], // Import RouterModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorldApp';
  logoPath = "../assets/Logo.jpg"; // Path to BridgeLabz logo
  bridgeLabzUrl = 'https://www.bridgelabz.com';

  openBridgeLabz(): void {
    window.open(this.bridgeLabzUrl, '_blank'); // Opens BridgeLabz website in a new tab
  }
}