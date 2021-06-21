import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cities = [
    { id: 1, name: 'Italy', avatar: '/assets/Italy.svg' },
    { id: 2, name: 'Japan', avatar: '/assets/jp.png' },
    { id: 3, name: 'India', avatar: '/assets/in.png' },
    { id: 4, name: 'North Korea', avatar: '/assets/kp.png' },
    { id: 5, name: 'Sri Lanka', avatar: '/assets/lk.png' },
    { id: 6, name: 'Pakistan', avatar: '/assets/pk.png' },
    { id: 7, name: 'United Kingdom', avatar: '/assets/gb.png' },
    { id: 8, name: 'Thailand', avatar: '/assets/th.png' },
    { id: 9, name: 'Afghanistan', avatar: '/assets/af.png' },
    { id: 10, name: 'Singapore', avatar: '/assets/sg.png' }
  ];

}
