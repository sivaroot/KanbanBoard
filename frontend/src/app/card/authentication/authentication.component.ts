import { Component, OnInit, Input } from '@angular/core';
import { Mode, Header } from 'src/app/app-constant';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {




  @Input()
  mode: string = '';
  header = Header.SIGNIN;
  private isSignup: boolean;
  private isSignin: boolean;
  constructor() {

  }
  ngOnInit() {
    console.log(this.mode)
    this.isSignup = Mode.SIGNUP == this.mode;
    this.isSignin = Mode.SIGNIN == this.mode;
    console.log('Is sign in', this.isSignin);
    console.log('Is sign up', this.isSignup);

    this.initComponent();
  }

  initComponent(){
    if (this.isSignin){
      this.header = Header.SIGNIN;
    } else {
      this.header = Header.SIGNUP;
    }


  }

}
