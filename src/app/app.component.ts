import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  /* Aprašomi komponento kintamieji */
  title = 'bit-orai';
  count = 0;
  city = 'Vilnius';

  /* ši funkcija suveikia, kiekviena kartą užsikrovus komponentui */
  ngOnInit() {
    this.count++;
    console.log(this.count);
    console.log('ngOnInit');
  }

  increment() {
    this.count++;
  }
}
