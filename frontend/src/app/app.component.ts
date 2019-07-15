import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      `google`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/ico/google_ico_32.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `facebook`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/ico/facebook_ico_32.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `github`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/ico/github_ico_32.svg")
    );
  }

}
