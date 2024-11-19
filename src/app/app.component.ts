import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basic_routing';
  memberData = [
    { name: "asadUllah", email: "asad@test.com" },
    { name: "Bilal", email: "bilal@test.com" },
    { name: "Mahrukh", email: "mahrukh@test.com" },
    { name: "saqlain", email: "saqlain@test.com" }
  ]
}
