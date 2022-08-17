import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  /* Aprašomi komponento kintamieji */
  title = 'bit-orai';
  city = 'Vilnius';

  /* ši funkcija suveikia, kiekviena kartą užsikrovus komponentui */
  ngOnInit() {
    console.log('ngOnInit');
  }
}
